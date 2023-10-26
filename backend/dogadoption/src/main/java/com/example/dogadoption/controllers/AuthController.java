//package com.example.dogadoption.controllers;
//
//import com.example.dogadoption.models.User;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RestController;
//import com.example.dogadoption.util.JwtUtil;
//
//@RestController
//public class AuthController {
//
//    @Autowired
//    private JwtUtil jwtUtil;
//    @Autowired
//    private AuthenticationManager authenticationManager;
//
//    @GetMapping("/")
//    public String welcome() {
//        return "Welcome to Springboot !!";
//    }
//
////    @PostMapping("/authenticate")
////    public String generateToken(@RequestBody User user) throws Exception {
////        try {
////            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(User.(), authRequest.getPassword()));
////        } catch (Exception ex) {
////            throw new Exception("inavalid username/password");
////        }
////        return jwtUtil.generateToken(User.getFullName());
////    }
//}