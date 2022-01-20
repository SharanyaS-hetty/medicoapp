package medico.medico.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import medico.medico.Models.AppointmentTest;

public interface AppointmentTestRepository extends MongoRepository<AppointmentTest,String> {
    
}
