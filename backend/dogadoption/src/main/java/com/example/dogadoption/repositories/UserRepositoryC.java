package com.example.dogadoption.repositories;

import com.example.dogadoption.models.User;
import org.springframework.stereotype.Repository;
// EXPERIMENTAL
// EXPERIMENTAL
// EXPERIMENTAL
// EXPERIMENTAL
// EXPERIMENTAL
// EXPERIMENTAL
// EXPERIMENTAL
// EXPERIMENTAL
// EXPERIMENTAL
// EXPERIMENTAL
// EXPERIMENTAL
// EXPERIMENTAL
// EXPERIMENTAL
// EXPERIMENTAL
// EXPERIMENTAL
// EXPERIMENTAL
// EXPERIMENTAL
// EXPERIMENTAL
// EXPERIMENTAL
// EXPERIMENTAL
// EXPERIMENTAL
// EXPERIMENTAL
// EXPERIMENTAL
// EXPERIMENTAL
// EXPERIMENTAL
// EXPERIMENTAL
// EXPERIMENTAL
// EXPERIMENTAL
// EXPERIMENTAL
// EXPERIMENTAL
// EXPERIMENTAL
// EXPERIMENTAL
// EXPERIMENTAL
// EXPERIMENTAL
// EXPERIMENTAL
// EXPERIMENTAL
// EXPERIMENTAL
// EXPERIMENTAL
// EXPERIMENTAL
// EXPERIMENTAL
// EXPERIMENTAL
// EXPERIMENTAL
// EXPERIMENTAL

@Repository
public class UserRepositoryC {
    public User findUserByEmail(String email) {
        User user = new User(email, "password");
        user.setId(1);
        user.setFirstName("John");
        user.setLastName("Doe");
        user.setInitials("F");
        user.setPhone("123456789");
        user.setAddress("123 Main St");
        user.setDateAndTimeCreated("2021-01-01 00:00:00");
        return user;
    }
}
