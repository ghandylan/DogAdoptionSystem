package com.example.dogadoption.controllers;

import com.example.dogadoption.models.User;
import com.example.dogadoption.services.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {
    public final UserService userService;
    public UserController(UserService userService) {
        this.userService = userService;
    }
    @RequestMapping(value = "/user/create")
    public User createUser(@RequestBody User user){return  userService.addUser(user);}
    @RequestMapping(value = "/user/{id}")
    public Optional<User> findUserById(@PathVariable Long id){
        return (Optional<User>) userService.findUserById(id);
    }
    @RequestMapping(value = "/user/{id}/update")
    public User updateUser(@RequestBody User user, @PathVariable Long id){
        return userService.updateUser(id, user);
    }
    @RequestMapping(value = "/user/{id}/delete")
    public void deleteUser(@PathVariable Long id){
        userService.deleteUser(id);
    }
}
