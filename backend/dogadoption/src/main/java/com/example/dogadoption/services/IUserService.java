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
    public User updateUser(String username, User user) {
        if (userRepository.existsById(username)){
            return userRepository.save(user);
        }else {
            return null;
        }
    }
    @Override
    public Optional<User> findUserById(String username){
        if(userRepository.existsById(username)){
            return (Optional<User>) userRepository.findById(username);
        }else {
            return Optional.empty();
        }
    }
    @Override
    public void deleteUser(String username){
        if(userRepository.existsById(username)) {
            userRepository.deleteById(username);
        } else {
            System.out.println("User Deleted");
        }
    }
}
