package com.example.medico.medico.Repository;

import com.example.medico.medico.Models.Doctors;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface DoctoreRepository extends MongoRepository<Doctors,String> {
    
}
