package medico.medico.Controllers;

import java.util.List;
import java.util.stream.Collectors;

import medico.medico.Models.Doctors;
import medico.medico.Repository.DoctoreRepository;
import medico.medico.Respones.Respones;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin
@RestController
@RequestMapping("/Hospital")
public class DoctorsController {
    @Autowired
    DoctoreRepository doctoreRepository;

    @PostMapping("/addDocter")
    public Respones addDoctor(@RequestBody Doctors doctors)
    {
        System.out.println("11");
        List<Doctors> doclist=doctoreRepository.findAll();
        
        for(Doctors doc :doclist)
        {
            System.out.println("12");
            if(doc.getPhone().equals(doctors.getPhone()))
            {
                return new Respones(200,"phone number alredy",doctors,"",false);
            }
        }
        doctoreRepository.save(doctors);
        return new Respones(200," Doctor Saved Sussfully",doctors,"",true);
    }

    @GetMapping("/findDoctors/{hospitalid}")
    public Respones findDoc(@PathVariable String hospitalid)
    {
        List<Doctors>docdata= doctoreRepository.findAll().stream().filter(data->data.getHospitalid().equals(hospitalid)).collect(Collectors.toList());
        
        return new Respones(200,"",docdata,"",true);                        
    }
    @GetMapping("/findDoc/{hospitalid}")
    public Respones findDocs(@PathVariable String hospitalid)
    {
        List<Doctors>docdata= doctoreRepository.findAll().stream().filter(data->data.getHospitalid().equals(hospitalid)).collect(Collectors.toList());

        return new Respones(200,"",docdata,"",true);
    }
}
