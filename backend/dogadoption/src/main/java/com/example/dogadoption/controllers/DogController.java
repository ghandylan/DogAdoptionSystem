package com.example.dogadoption.controllers;

import com.example.dogadoption.models.Dog;
import com.example.dogadoption.models.Vet;
import com.example.dogadoption.services.DogService;
import com.example.dogadoption.services.VetService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class DogController {
    public final DogService dogService;
    public DogController(DogService dogService, VetService vetService) {
        this.dogService = dogService;
    }
    @GetMapping("dogs")
    public List<Dog> getAllDogs() {
        return dogService.getAllDogs();
    }

    @GetMapping("dog/{id}")
    public Dog getDogById(@PathVariable Long id) {
        return dogService.getDogById(id).orElse(null);
    }

    @RequestMapping(value = "/dog")
    public Dog addDog(@RequestBody Dog dog) {
        return dogService.addDog(dog);
    }

    @PutMapping("dog/{id}")
    public Dog updateDog(@PathVariable Long id, @RequestBody Dog dog) {
        return dogService.updateDog(id, dog);
    }

    @DeleteMapping("dog/{id}")
    public void deleteDogById(@PathVariable Long id) {
        dogService.deleteDogById(id);
    }
}
