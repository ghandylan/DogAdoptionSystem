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
    @RequestMapping(value = "/vet/{id}")
    public Optional<Vet> findVetById(@PathVariable Long id){
        return vetService.findVet(id);
    }
    @RequestMapping(value = "vet/create")
    public Vet createVet(@RequestBody Vet vet){
        return vetService.addVet(vet);
    }
    @RequestMapping(value = "/vet/{id}/delete")
    public void deleteVet(@PathVariable Long id){
        vetService.deleteVet(id);
    }
}
