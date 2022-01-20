package medico.medico.Controllers;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import medico.medico.Models.AppointmentTest;
import medico.medico.Repository.AppointmentTestRepository;
import medico.medico.Respones.Respones;

@CrossOrigin
@RestController
@RequestMapping("/Hospital")
public class AppointmentTestContoller {

    @Autowired
    AppointmentTestRepository appointmentTestRepository;
    @PostMapping("/addAppointementTest")
    public Respones addPatient(@RequestBody AppointmentTest appointmenttest)
    {
      
      List<AppointmentTest> checkAppointment=appointmentTestRepository.findAll().stream().filter(data->data.getDate().equals(appointmenttest.getDate())).collect(Collectors.toList());
      for(AppointmentTest at:checkAppointment){
          if(at.getPatid().equals(appointmenttest.getPatid())){
            return new Respones(400,"Appointement Alreay for this Day ","","",true);
          }
      }
      AppointmentTest appointmentdata=appointmentTestRepository.save(appointmenttest);
      return new Respones(200,"Appointement taken Successfully",appointmentdata,"",true);

    }

    
    @GetMapping("/getAppointTestbypid/{pid}")
    public Respones getAppointbyPid(@PathVariable String pid)
    {
    
      List<AppointmentTest> checkAppointment=appointmentTestRepository.findAll().stream().filter(data->data.getPatid().equals(pid)).collect(Collectors.toList());
      
      return new Respones(200,"Registerd Successfully",checkAppointment,"",true);

    }
    
    // @GetMapping("/check/{datev}")
    // public Respones Check(@PathVariable String datev)
    // {
    
    //   List<AppointmentTest> checkAppointment=appointmentTestRepository.findAll().stream().filter(data->data.getDate().equals(datev)).collect(Collectors.toList());
    //   for(AppointmentTest ap:checkAppointment){
    //      System.out.println(ap.getPatid());
    //   }
     
    //   return new Respones(200,"Registerd Successfully",checkAppointment,"",true);

    // }
    
}
