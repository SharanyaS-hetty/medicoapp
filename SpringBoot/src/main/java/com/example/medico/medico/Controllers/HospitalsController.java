package com.example.medico.medico.Controllers;

import java.util.List;
import java.util.Optional;

import com.example.medico.medico.Models.Hospitals;
import com.example.medico.medico.Repository.HospitalsRepository;
import com.example.medico.medico.Respones.Respones;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("Hospital")
public class HospitalsController {
    @Autowired
    HospitalsRepository hospitalsRepository;

    @PostMapping("/addHospital")
    public Respones addHospital(@RequestBody Hospitals hospitals)
    {
        if(hospitalsRepository.count()>0){
            List<Hospitals> data = hospitalsRepository.findAll();
            for(Hospitals hos: data){
                if(hos.getHospitalid().equals(hospitals.getHospitalid())){
                    
                    return new Respones("400","Hospital Id Already exists",false);
                }
            }
        }   
        hospitalsRepository.save(hospitals);
        return new Respones("200","Hospitals saved Successfully",true);
    }
    
    @GetMapping("/findHospital")
    public Respones addfind()
    {
        List<Hospitals> hosdata=hospitalsRepository.findAll();
        return new Respones("200",hosdata,true);
    }
    
    @PostMapping("/loginHospital")
    public Respones login(@RequestBody Hospitals hospitals)
    {
        if(hospitalsRepository.count()>0){
            List<Hospitals> data = hospitalsRepository.findAll();
            for(Hospitals hos: data){
                if(hos.getHospitalid().equals(hospitals.getHospitalid()) && hos.getPassword().equals(hospitals.getPassword())){
                    return new Respones("200",hos,true);
                }
            }
        }       
        return new Respones("400","data Not found",true);
    }
    

}
