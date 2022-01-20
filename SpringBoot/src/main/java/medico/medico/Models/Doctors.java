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
@Document("Doctors")
public class Doctors {
    @Id
    String docid;
    String hospitalid;
    String name;
    String phone;
    String Specialization;
    String logintime;
    String logouttime;
}
