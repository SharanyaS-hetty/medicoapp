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

import medico.medico.Models.AppointmentCons;
import medico.medico.Repository.AppointmentConsRepository;
import medico.medico.Respones.Respones;

@CrossOrigin
@RestController
@RequestMapping("/Hospital")
public class AppointmentConsController {

    @Autowired
    AppointmentConsRepository appointmentConsRepository;
    @PostMapping("/addAppointementcon")
    public Respones addPatient(@RequestBody AppointmentCons appointmentcon)
    {
      
      List<AppointmentCons> checkAppointment=appointmentConsRepository.findAll().stream().filter(data->data.getDate().equals(appointmentcon.getDate())).collect(Collectors.toList());
      for(AppointmentCons ap:checkAppointment){
          if(ap.getPatid().equals(appointmentcon.getPatid())){
            return new Respones(400,"Appointement Alreay for this Day ","","",true);
          }
      }
      AppointmentCons appointmentdata=appointmentConsRepository.save(appointmentcon);
      return new Respones(200,"Appointement taken Successfully",appointmentdata,"",true);

    }


    @GetMapping("/getAppointbypid/{pid}")
    public Respones getAppointbyPid(@PathVariable String pid)
    {
    
      List<AppointmentCons> checkAppointment=appointmentConsRepository.findAll().stream().filter(data->data.getPatid().equals(pid)).collect(Collectors.toList());
      
      return new Respones(200,"Registerd Successfully",checkAppointment,"",true);

    }
    
    @GetMapping("/check/{datev}")
    public Respones Check(@PathVariable String datev)
    {
    
      List<AppointmentCons> checkAppointment=appointmentConsRepository.findAll().stream().filter(data->data.getDate().equals(datev)).collect(Collectors.toList());
      for(AppointmentCons ap:checkAppointment){
         System.out.println(ap.getPatid());
      }
     
      return new Respones(200,"Registerd Successfully",checkAppointment,"",true);

    }
    
}
