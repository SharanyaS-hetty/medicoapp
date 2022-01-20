
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
@Document(" AppointmentTest")
public class AppointmentTest {

    @Id
    String appointId;
    String hospitalid;
    String patid;
    String pname;
    String testnames;
    String date;
    String time;
    String statusMessage;
    boolean status;
}
