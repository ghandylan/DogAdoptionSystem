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
    public Optional<Vet> findVetUsername(String username){
        if(vetRepository.existsById(username)){
            return vetRepository.findById(username);
        }else{
            return Optional.empty();
        }
    }
    @Override
    public Vet addVet(Vet vet){
        System.out.println("WORKKKKKKK");
        return vetRepository.save(vet);}
    @Override
    public void deleteVet(String username){
        if(vetRepository.existsById(username)){
            vetRepository.deleteById(username);
        }else {
            System.out.println("Vet Deleted!");
        }
    }

}
