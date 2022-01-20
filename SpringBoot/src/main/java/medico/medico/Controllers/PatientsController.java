package medico.medico.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import medico.medico.Models.Patients;
import medico.medico.Repository.PatientsRepository;
import medico.medico.Respones.Respones;
import medico.medico.security.JwtTokenUtil;

@CrossOrigin
@RestController
@RequestMapping("/Hospital")
public class PatientsController 
{
    @Autowired
    PatientsRepository patientsRepository;

    @Autowired
	private JwtTokenUtil jwtTokenUtil;

    @PostMapping("/PatientRegisterd")
    public Respones addPatient(@RequestBody Patients patients)
    {
        Patients patients2=patientsRepository.findByEmail(patients.getEmail());
        if(patients2==null){
            patientsRepository.save(patients);
            return new Respones(200,"Registerd Successfully","Patient saved Successfully","",true);
        }   
        return new Respones(400,"Email Id Already exists","Patient Id Already exists","",false);
    }
        

    @PostMapping("/Patientlogin")
    public Respones login(@RequestBody Patients patients)
    {
        try{
        Patients patients2=patientsRepository.findByEmail(patients.getEmail());
        if(patients2.getEmail().equals(patients.getEmail()) && patients2.getPassword().equals(patients.getPassword())){
           
            final String token= jwtTokenUtil.generateToken(patients2.getPatid());
            String id=jwtTokenUtil.getUserIdFromToken(token);
            System.out.println(id);
            return new Respones(200,"Login Successfully",patients2,token,true);
        }else{
            return new Respones(400,"Invaild Email And Password","","",false);
        }
      }catch(NullPointerException e){
        return new Respones(400,"Invaild Email And Password","","",false);
      }
       
    }

    @GetMapping("/getPatient/{token}")
    public Respones login(@PathVariable String token)
    {

        System.out.println(token);
        try{
        String patientid=jwtTokenUtil.getUserIdFromToken(token);
        Patients patientdata=patientsRepository.findById(patientid).get();
        return new Respones(200,"",patientdata,token,true);
        }catch(Exception e){
         return new Respones(400,"Session Exprided","Session Exprided","",false);
        }
    }
    @GetMapping("/getNameByid/{pid}")
    public Respones getNameByid(@PathVariable String pid)
    {

        Patients patientdata = patientsRepository.findById(pid).get();

        return new Respones(400,"Session Exprided","Session Exprided","",false);
    }
}
