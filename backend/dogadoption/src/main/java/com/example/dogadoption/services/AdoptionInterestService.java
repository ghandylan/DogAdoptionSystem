package com.example.dogadoption.services;

import com.example.dogadoption.models.AdoptionInterest;

import java.util.List;
import java.util.Optional;

public interface AdoptionInterestService {
    AdoptionInterest createAdoption(AdoptionInterest adoptionInterest);

    List<AdoptionInterest> findUserAdoption(List<String> id);

    List<AdoptionInterest> adoptionInterestList();

    Optional<AdoptionInterest> findAdoptionInterest(String id);

    AdoptionInterest updateAdoptionInterestStatus(String id, AdoptionInterest adoptionInterest);

    void deleteAdoptionInterest(String id);
}
