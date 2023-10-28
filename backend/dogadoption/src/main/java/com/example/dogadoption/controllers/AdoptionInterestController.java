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
    @RequestMapping(value = "/adoption/list")
    public List<AdoptionInterest> getAllAdoptionInterest(){
        return (List<AdoptionInterest>) adoptionInterestService.adoptionInterestList();
    }
    @RequestMapping(value = "/adoption/create")
    public AdoptionInterest createAdoptionInterest(@RequestBody AdoptionInterest adoptionInterest){
        return adoptionInterestService.createAdoption(adoptionInterest);
    }
    @RequestMapping(value = "/adoption/{id}")
    public Optional<AdoptionInterest> findAdoptionInterest(@PathVariable String id){
        return adoptionInterestService.findAdoptionInterest(id);
    }

    @RequestMapping( value = "/adoption/list/{id}")
    public List<AdoptionInterest> findUserAdoptions(@PathVariable List<String> id){
        return adoptionInterestService.findUserAdoption(id);
    }
    @RequestMapping(value = "/adoption/delete/{id}")
    public void deleteAdoptionInterest(@PathVariable String id){adoptionInterestService.deleteAdoptionInterest(id);}
}
