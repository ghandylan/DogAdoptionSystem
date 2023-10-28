package com.example.dogadoption.services;

import com.example.dogadoption.models.Vet;
import com.example.dogadoption.repositories.VetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Optional;

@Service
public class IVetService implements VetService{
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;
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
        vet.setUsername(vet.getUsername());
        vet.setAddress(vet.getAddress());
        vet.setPassword(bCryptPasswordEncoder.encode(vet.getPassword()));
        vet.setDateAndTimeCreated(new Date().toString());
        return vetRepository.save(vet);}
    @Override
    public void deleteVet(String username){
        if(vetRepository.existsById(username)){
            vetRepository.deleteById(username);
        }else {
            System.out.println("Vet Deleted!");
        }
    }
    @Override
    public boolean isPasswordCorrect(Vet vet, String enteredPassword) {

        // Use BCryptPasswordEncoder to verify the entered password
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        return passwordEncoder.matches(enteredPassword, vet.getPassword());
    }

}
