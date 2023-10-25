package com.example.dogadoption.services;

import com.example.dogadoption.models.Vet;
import com.example.dogadoption.repositories.VetRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class IVetService implements VetService{
    private final VetRepository vetRepository;
    public IVetService(VetRepository vetRepository) {
        this.vetRepository = vetRepository;
    }
    @Override
    public Optional<Vet> findVet(Long id){
        if(vetRepository.existsById(id)){
            return vetRepository.findById(id);
        }else{
            return Optional.empty();
        }
    }
    @Override
    public Vet addVet(Vet vet){
        System.out.println("WORKKKKKKK");
        return vetRepository.save(vet);}
    @Override
    public void deleteVet(Long id){
        if(vetRepository.existsById(id)){
            vetRepository.deleteById(id);
        }else {
            System.out.println("Vet Deleted!");
        }
    }

}
