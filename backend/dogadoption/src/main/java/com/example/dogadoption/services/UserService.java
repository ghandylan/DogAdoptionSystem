package com.example.dogadoption.services;

import com.example.dogadoption.models.User;

import java.util.Optional;

public interface UserService {
    User addUser(User user);

    User updateUser(String id, User user);

    Optional<User> findUserById(String id);

    void deleteUser(String id);
}
