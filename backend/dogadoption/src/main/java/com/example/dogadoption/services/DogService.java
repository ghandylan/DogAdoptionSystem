package com.example.dogadoption.services;

import com.example.dogadoption.models.Dog;

import java.util.List;
import java.util.Optional;

public interface DogService {
    List<Dog> getAllDogs();
    Optional<Dog> getDogById(Long id);
    void addDog(Dog dog);
    void updateDog(Long id, Dog dog);
    void deleteDogById(Long id);
}
