package medico.medico.Models;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@ToString
@Document(" AppointmentCons ")
public class AppointmentCons {
    @Id
    String appointId;
    String hospitalid;
    String patid;
    String pname;
    String specialization;
    String date;
    String time;
    String statusMessage;
    boolean status;
    
}
