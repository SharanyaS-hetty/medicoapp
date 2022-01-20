package medico.medico.security;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.web.server.ServerWebExchange;
import org.springframework.web.server.WebFilter;
import org.springframework.web.server.WebFilterChain;


import io.jsonwebtoken.ExpiredJwtException;
import medico.medico.Controllers.HospitalsController;
import medico.medico.Models.HospitalsDetails;
import medico.medico.Models.Hospitals;
import medico.medico.Repository.HospitalsRepository;


@Component
public class JwtRequestFilter extends OncePerRequestFilter {

	@Autowired

    private HospitalsRepository hospitalsRepository;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;
	
	@Override
    protected boolean shouldNotFilter(HttpServletRequest request) {
        String path = request.getServletPath();
        return path.contains("/Hospital/");
    }

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response,
			FilterChain chain)
			throws ServletException, IOException 
	{		
		final String requestTokenHeader = request.getHeader("Authorization");

		String userid = null;
		String jwtToken = null;
		// JWT Token is in the form "Bearer token". Remove Bearer word and get only the Token
		if (requestTokenHeader != null && requestTokenHeader.startsWith("Bearer ")) 
		{
			jwtToken = requestTokenHeader.substring(7);
			try {
				userid = jwtTokenUtil.getUserIdFromToken(jwtToken);
			} catch (IllegalArgumentException e) {
				response.sendError(HttpServletResponse.SC_NOT_FOUND, "Token Not Found !");
			} catch (ExpiredJwtException e) {
				response.sendError(HttpServletResponse.SC_NOT_ACCEPTABLE, "Token Expired !");
			}
		} else {
			System.out.println("NO Token");
			response.sendError(HttpServletResponse.SC_NOT_FOUND, "Token Not Found !");
		}
		System.out.println("UI : " + userid);
		//Once we get the token validate it.
		if (userid != null && SecurityContextHolder.getContext().getAuthentication() == null) 
		{
			System.out.println("UI : " + userid);
			Hospitals hospitalsuser = this.hospitalsRepository.findById(userid).get();
			HospitalsDetails hospitalsDetails = new HospitalsDetails(hospitalsuser);

			// if token is valid configure Spring Security to manually set authentication
			if (jwtTokenUtil.validateToken(jwtToken, hospitalsuser)) {

				UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(
						hospitalsDetails, null, hospitalsDetails.getAuthorities());
				usernamePasswordAuthenticationToken
						.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
				// After setting the Authentication in the context, we specify
				// that the current user is authenticated. So it passes the Spring Security Configurations successfully.
				SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
				chain.doFilter(request, response);
			}else {
				response.sendError(HttpServletResponse.SC_NOT_FOUND, "Token Not Found !");
			}
		}else {
			if (userid == null)
				response.sendError(HttpServletResponse.SC_NOT_FOUND, "Token Not Found !");
			else
				chain.doFilter(request, response);
		}
	}

}