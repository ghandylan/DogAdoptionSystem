package com.example.dogadoption;

import com.example.dogadoption.models.Vet;
import com.example.dogadoption.repositories.VetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.PostConstruct;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@SpringBootApplication
public class DogadoptionApplication {

    @Autowired
    private VetRepository vetRepository;


    @PostConstruct
    public void initUsers() {
        List<Vet> vets = Stream.of(
                new Vet(1, "makativet", "123", "address1", "dateAndTimeCreated1")
                ).collect(Collectors.toList());
        vetRepository.saveAll(vets);
    }

    public static void main(String[] args) {
        SpringApplication.run(DogadoptionApplication.class, args);
    }

}
