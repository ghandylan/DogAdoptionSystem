package com.example.dogadoption.controllers;

import com.example.dogadoption.models.AdoptionInterest;
import com.example.dogadoption.services.AdoptionInterestService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class AdoptionInterestController {
    public final AdoptionInterestService adoptionInterestService;
    public AdoptionInterestController(AdoptionInterestService adoptionInterestService){
        this.adoptionInterestService = adoptionInterestService;
    }
    @RequestMapping(value = "/AdoptionInterest/List")
    public List<AdoptionInterest> getAllAdoptionInterest(){
        return (List<AdoptionInterest>) adoptionInterestService.adoptionInterestList();
    }
    @RequestMapping(value = "/AdoptionInterest/create")
    public AdoptionInterest createAdoptionInterest(@RequestBody AdoptionInterest adoptionInterest){
        return adoptionInterestService.createAdoption(adoptionInterest);
    }
    @RequestMapping(value = "/AdoptionInterest/{id}")
    public Optional<AdoptionInterest> findAdoptionInterest(@PathVariable Long id){
        return adoptionInterestService.findAdoptionInterest(id);
    }
    @RequestMapping(value = "/AdoptionInterest/delete/{id}")
    public void deleteAdoptionInterest(@PathVariable Long id){adoptionInterestService.deleteAdoptionInterest(id);}
}
