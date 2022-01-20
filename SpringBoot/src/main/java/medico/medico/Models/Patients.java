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
@Document("Patients")
public class Patients {
    @Id
    String patid;
    String name;
    String age;
    String gender;
    String phoneno;
    String email;
    String password;
    boolean status;

}
