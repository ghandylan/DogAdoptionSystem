package com.example.dogadoption.services;

import com.example.dogadoption.models.AdoptionInterest;
import com.example.dogadoption.repositories.AdoptionInterestRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class IAdoptionInterestService implements AdoptionInterestService{
    private final AdoptionInterestRepository adoptionInterestRepository;
    public IAdoptionInterestService(AdoptionInterestRepository adoptionInterestRepository) {
        this.adoptionInterestRepository = adoptionInterestRepository;
    }
    @Override
    public AdoptionInterest createAdoption(AdoptionInterest adoptionInterest){
        return adoptionInterestRepository.save(adoptionInterest);
    }

    @Override
    public List<AdoptionInterest> findUserAdoption(List<String> id){
        return (List<AdoptionInterest>) adoptionInterestRepository.findAllById(id);
    }
    @Override
    public List<AdoptionInterest> adoptionInterestList(){
            return (List<AdoptionInterest>) adoptionInterestRepository.findAll();
    }

    @Override
    public Optional<AdoptionInterest> findAdoptionInterest(String id){
        if(adoptionInterestRepository.existsById(id)){
            return adoptionInterestRepository.findById(id);
        }else {
            return Optional.empty();
        }
    }
    @Override
    public void deleteAdoptionInterest(String id){
        if(adoptionInterestRepository.existsById(id)){
            adoptionInterestRepository.deleteById(id);
        }else {
            System.out.println("Adoption Interest Deleted!");
        }
    }
}
