package medico.medico.Repository;



import org.springframework.data.mongodb.repository.MongoRepository;

import medico.medico.Models.Doctors;

public interface DoctoreRepository extends MongoRepository<Doctors,String> {
    
}
