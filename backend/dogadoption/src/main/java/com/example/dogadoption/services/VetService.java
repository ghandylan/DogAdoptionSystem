package com.example.dogadoption.services;

import com.example.dogadoption.models.Vet;

import java.util.Optional;

public interface VetService {
    Optional<Vet> findVetUsername(String username);
    Vet addVet(Vet vet);
    void deleteVet(String username);
}
