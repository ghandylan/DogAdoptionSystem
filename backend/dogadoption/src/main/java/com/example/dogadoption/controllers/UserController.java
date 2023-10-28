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
    @RequestMapping(value = "/user/{id}/{password}")
    public Optional<User> findUserById(@PathVariable String id, @PathVariable String password){
        Optional<User> placeholder = userService.findUserById(id);
        if(placeholder.isPresent()){
            User user1 = placeholder.get();
            System.out.println("value of check password: "+userService.isPasswordCorrect(user1.getPassword(), password));
            if(userService.isPasswordCorrect(user1.getPassword(), password) == true){
                return placeholder;
            }else{
                return Optional.of(new User());
            }
        }else {
            return Optional.of(new User());
        }
    }
    @RequestMapping(value = "/user/{id}/update")
    public User updateUser(@RequestBody User user, @PathVariable String id){
        return userService.updateUser(id, user);
    }
    @RequestMapping(value = "/user/{id}/delete")
    public void deleteUser(@PathVariable String id){
        userService.deleteUser(id);
    }
}
