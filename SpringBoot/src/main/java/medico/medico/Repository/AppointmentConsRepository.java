package medico.medico.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import medico.medico.Models.AppointmentCons;

public interface AppointmentConsRepository extends MongoRepository<AppointmentCons,String>{
    
}
