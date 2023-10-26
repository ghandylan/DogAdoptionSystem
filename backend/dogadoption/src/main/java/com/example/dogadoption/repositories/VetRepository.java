package com.example.dogadoption.repositories;

import com.example.dogadoption.models.Vet;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
//pass password
@Repository
public interface VetRepository extends CrudRepository<Vet, String> {
}
