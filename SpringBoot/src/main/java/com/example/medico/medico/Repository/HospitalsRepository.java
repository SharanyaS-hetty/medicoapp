package com.example.medico.medico.Repository;

import com.example.medico.medico.Models.Hospitals;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface HospitalsRepository extends MongoRepository<Hospitals,String> {
    
}
