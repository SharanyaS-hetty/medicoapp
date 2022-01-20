package com.example.medico.medico.Controllers;

import java.util.List;

import com.example.medico.medico.Models.Doctors;
import com.example.medico.medico.Repository.DoctoreRepository;
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
@RequestMapping("Doctors")
public class DoctorsController {
    @Autowired
    DoctoreRepository doctoreRepository;

    @PostMapping("/addDocter")
    public Respones addDoctor(@RequestBody Doctors doctors)
    {
        doctoreRepository.save(doctors);
        return new Respones("200",doctors,true);
    }

    @PostMapping("/findDoctors")
    public Respones findDoc()
    {
        List<Doctors>docdata= doctoreRepository.findAll();
        return new Respones("200",docdata,true);
    }
    
}
