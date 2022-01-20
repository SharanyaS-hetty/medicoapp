package medico.medico.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import medico.medico.Models.Hospitals;
import medico.medico.Models.HospitalsDetails;
import medico.medico.Repository.HospitalsRepository;

@Service
public class HospitalsDetailService implements UserDetailsService {
    @Autowired
    HospitalsRepository hospitalsRepository;

    public boolean addHospitals(Hospitals hospitals){
        if(hospitalsRepository.count()>0)
        {
            List<Hospitals> data = hospitalsRepository.findAll();
            for(Hospitals hos: data){
                if(hos.getHospitalid().equals(hospitals.getHospitalid())){
                    
                    return true;
                }
            }
        }   
        hospitalsRepository.save(hospitals);
        return false;
    }

    public String gethosid(Hospitals hospitals){

        String hosid=hospitals.getHospitalid();

        return hosid;

    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        System.out.println("1123");
        System.out.println(username);
        Hospitals hospitals =hospitalsRepository.findById(username).get();
        System.out.println(hospitals);
        return new HospitalsDetails(hospitals);
    }
}
