package com.example.dogadoption.services;

import com.example.dogadoption.models.AdoptionInterest;

import java.util.List;
import java.util.Optional;

public interface AdoptionInterestService {
    AdoptionInterest createAdoption(AdoptionInterest adoptionInterest);

    List<AdoptionInterest> adoptionInterestList();

    Optional<AdoptionInterest> findAdoptionInterest(Long id);

    void deleteAdoptionInterest(Long id);
}
