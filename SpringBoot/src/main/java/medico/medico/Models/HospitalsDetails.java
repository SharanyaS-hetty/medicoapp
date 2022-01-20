package medico.medico.Models;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class HospitalsDetails implements UserDetails {

    private static final long serialVersionUID = 1L;

    private Hospitals hospitals;

    public HospitalsDetails(Hospitals hospitals){
        this.hospitals=hospitals;   
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public String getPassword() {
        // TODO Auto-generated method stub
        return hospitals.getPassword();
    }

    @Override
    public String getUsername() {
        // TODO Auto-generated method stub
        return hospitals.getHospitalid();
    }
    public String gethospitalname() {
        // TODO Auto-generated method stub
        return hospitals.getHospitalname();
    }
    
    public String gethospitalid() {
        // TODO Auto-generated method stub
        return hospitals.getHospitalid();
    }

    public String address() {
        // TODO Auto-generated method stub
        return hospitals.getAddress();
    }

    public String email(){

        return hospitals.getEmail();
    }

    public long contact() {
        // TODO Auto-generated method stub
        return hospitals.getContact();
    }

    public boolean hosstatus(){

        return hospitals.isHosstatus();
    }


    @Override
    public boolean isAccountNonExpired() {
        // TODO Auto-generated method stub
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        // TODO Auto-generated method stub
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        // TODO Auto-generated method stub
        return true;
    }

    @Override
    public boolean isEnabled() {
        if(hospitals!=null)
			return true;
		else
			return false;
    }
    
    
}
