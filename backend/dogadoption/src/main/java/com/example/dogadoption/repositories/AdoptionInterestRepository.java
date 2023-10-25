package com.example.dogadoption.repositories;

import com.example.dogadoption.models.AdoptionInterest;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdoptionInterestRepository extends CrudRepository<AdoptionInterest, Long> {
}
