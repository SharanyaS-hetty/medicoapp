package medico.medico.Repository;

import medico.medico.Models.Hospitals;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HospitalsRepository extends MongoRepository<Hospitals,String> {
    
}
