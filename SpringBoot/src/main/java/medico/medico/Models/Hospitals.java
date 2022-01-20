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
@Document("Hositals")
public class Hospitals {
     @Id
     String hospitalid;
     String password;
     String hospitalname;
     String address;   
     String Email;   
     boolean hosstatus;   
     long contact;
}
