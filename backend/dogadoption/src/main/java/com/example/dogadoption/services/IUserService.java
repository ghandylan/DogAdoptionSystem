package com.example.dogadoption.services;

import com.example.dogadoption.models.User;
import com.example.dogadoption.repositories.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class IUserService implements UserService {


    private final UserRepository userRepository;

    public IUserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User addUser(User user) {return userRepository.save(user);}

    @Override
    public User updateUser(String id, User user) {
        if (userRepository.existsById(id)){
            return userRepository.save(user);
        }else {
            return null;
        }
    }
    @Override
    public Optional<User> findUserById(String id){
        if(userRepository.existsById(id)){
            return (Optional<User>) userRepository.findById(id);
        }else {
            return Optional.empty();
        }
    }
    @Override
    public void deleteUser(String id){
        if(userRepository.existsById(id)) {
            userRepository.deleteById(id);
        } else {
            System.out.println("User Deleted");
        }
    }
}
