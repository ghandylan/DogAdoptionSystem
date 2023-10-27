package com.example.dogadoption.controllers;

import com.example.dogadoption.models.Vet;
import com.example.dogadoption.services.VetService;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class VetController {
    public final VetService vetService;
    public VetController(VetService vetService) {
        this.vetService = vetService;
    }
    @RequestMapping(value = "/vet/{username}")
    public Optional<Vet> findVetById(@PathVariable String username){
        return vetService.findVetUsername(username);
    }
    @RequestMapping(value = "vet/create")
    public Vet createVet(@RequestBody Vet vet){
        return vetService.addVet(vet);
    }
    @RequestMapping(value = "/vet/{username}/delete")
    public void deleteVet(@PathVariable String username){
        vetService.deleteVet(username);
    }
}
