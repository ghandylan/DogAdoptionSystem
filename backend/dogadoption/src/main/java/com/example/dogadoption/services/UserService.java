package com.example.dogadoption.services;

import com.example.dogadoption.models.User;

import java.util.Optional;

public interface UserService {
    User addUser(User user);

    User updateUser(Long id, User user);

    Optional<User> findUserById(Long id);

    void deleteUser(Long id);
}
