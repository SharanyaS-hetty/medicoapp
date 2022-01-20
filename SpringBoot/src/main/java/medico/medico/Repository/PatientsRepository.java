package medico.medico.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import medico.medico.Models.Patients;

public interface PatientsRepository extends MongoRepository<Patients,String> {
    public Patients findByEmail(String email );
    
}