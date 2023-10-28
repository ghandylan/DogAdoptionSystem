package com.example.dogadoption.services;

import com.example.dogadoption.models.User;
import com.example.dogadoption.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class IUserService implements UserService {
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    private final UserRepository userRepository;

    public IUserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User addUser(User user) {
        user.setFirstName(user.getFirstName());
        user.setLastName(user.getLastName());
        user.setInitials(user.getInitials());
        user.setPhone(user.getPhone());
        user.setEmail(user.getEmail());
        // hash and salt password
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        user.setAddress(user.getAddress());
        user.setDateAndTimeCreated(String.valueOf(LocalDateTime.now()));
        return userRepository.save(user);
    }

    @Override
    public User updateUser(String id, User user) {
        if (userRepository.existsById(id)) {
            return userRepository.save(user);
        } else {
            return null;
        }
    }

    @Override
    public Optional<User> findUserById(String id) {
        if (userRepository.existsById(id)) {
            return (Optional<User>) userRepository.findById(id);
        } else {
            return Optional.empty();
        }
    }

    @Override
    public void deleteUser(String id) {
        if (userRepository.existsById(id)) {
            userRepository.deleteById(id);
        } else {
            System.out.println("User Deleted");
        }
    }

    // checking password
    @Override
    public boolean isPasswordCorrect(String userPassword, String enteredPassword) {

        // Use BCryptPasswordEncoder to verify the entered password
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        return passwordEncoder.matches(enteredPassword, userPassword);
    }

}
