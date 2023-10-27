//package com.example.dogadoption.controllers;
//
//import com.example.dogadoption.auth.JwtUtil;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import javax.servlet.http.HttpServletRequest;
//
//@RestController
//@RequestMapping("/logout")
//public class LogoutController {
//
//    @Autowired
//    private JwtUtil jwtUtil;
//
//    @PostMapping
//    public ResponseEntity<String> logout(HttpServletRequest request) {
//        // Retrieve the token from the request
//        String token = jwtUtil.resolveToken(request);
//
//        // Invalidate the token
////        jwtUtil.invalidateToken(token);
//        return ResponseEntity.ok("Logged out successfully.");
//    }
//}
