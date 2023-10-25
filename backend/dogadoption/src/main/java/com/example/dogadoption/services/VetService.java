package com.example.dogadoption.services;

import com.example.dogadoption.models.Vet;

import java.util.Optional;

public interface VetService {
    Optional<Vet> findVet(Long id);

    Vet addVet(Vet vet);

    void deleteVet(Long id);
}
