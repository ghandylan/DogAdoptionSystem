package com.example.dogadoption.services;

import com.example.dogadoption.models.Dog;
import com.example.dogadoption.repositories.DogRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DogServiceImpl implements DogService {
    private final DogRepository dogRepository;

    public DogServiceImpl(DogRepository dogRepository) {
        this.dogRepository = dogRepository;
    }

    @Override
    public List<Dog> getAllDogs() {
        return (List<Dog>) dogRepository.findAll();
    }

    @Override
    public Optional<Dog> getDogById(Long id) {
        // automatically returns null if there are no results
        return dogRepository.findById(id);
    }

    @Override
    public void addDog(Dog dog) {
        dogRepository.save(dog);
    }

    @Override
    public void updateDog(Long id, Dog dog) {
        // Store the dog in placeholder variable based on id
        Optional<Dog> placeholder = dogRepository.findById(id);
        // if there is a dog with that id, update the dog and save it
        if (placeholder.isPresent()) {
            Dog updatedDog = placeholder.get();
            updatedDog.setPicture(dog.getPicture());
            updatedDog.setName(dog.getName());
            updatedDog.setAge(dog.getAge());
            updatedDog.setDateOfBirth(dog.getDateOfBirth());
            updatedDog.setGender(dog.getGender());
            updatedDog.setBreed(dog.getBreed());
            updatedDog.setHeight(dog.getHeight());
            updatedDog.setWeight(dog.getWeight());
            updatedDog.setMedicalConditions(dog.getMedicalConditions());
            dogRepository.save(updatedDog);
        }
        // if there is no dog with that id, return null
        else {
        }
    }


    @Override
    public void deleteDogById(Long id) {
        // store the dog in placeholder variable based on id
        Optional<Dog> placeholder = dogRepository.findById(id);
        // if dog with the id is present, delete it
        if (placeholder.isPresent()) {
            dogRepository.deleteById(id);
        }
        // if dog with the id is not present, print "Dog not found"
        else {
            System.out.println("Dog not found");
        }
    }
}
