package com.example.dogadoption.controllers;

import com.example.dogadoption.models.Dog;
import com.example.dogadoption.models.Vet;
import com.example.dogadoption.services.DogService;
import com.example.dogadoption.services.VetService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

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

    @PostMapping("/dog")
    public String addDog(@RequestParam("dogImage")MultipartFile dogImage, @ModelAttribute Dog dog) {
        try {
            String pictureName = dogImage.getOriginalFilename();
            String pictureType = dogImage.getContentType();
            byte[] fileContent = dogImage.getBytes();
            // Set image information
            dog.setPictureName(pictureName);
            dog.setPictureType(pictureType);
            dog.setPicture(fileContent);

            dogService.addDog(dog);


            return "File saved successfully";
        }

        catch(Exception e) {
            return "File not saved";
        }
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
