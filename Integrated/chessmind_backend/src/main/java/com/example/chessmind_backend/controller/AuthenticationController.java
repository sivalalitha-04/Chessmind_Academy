package com.example.chessmind_backend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.chessmind_backend.dto.request.AuthenticationRequest;
import com.example.chessmind_backend.dto.request.RegisterRequest;
import com.example.chessmind_backend.dto.response.AuthenticationResponse;
import com.example.chessmind_backend.service.AuthenticationService;
import com.example.chessmind_backend.entity.User;
import com.example.chessmind_backend.repository.UserRepo;

import java.util.*;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;
    private final UserRepo userRepository;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody RegisterRequest request) {
        try {
            authenticationService.register(request);
            return ResponseEntity.status(HttpStatus.CREATED).body("Registration successful");
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

    @PostMapping("/authenticate")
public ResponseEntity<Map<String, Object>> authenticate(@RequestBody AuthenticationRequest request) {
    AuthenticationResponse authenticationResponse = authenticationService.authenticate(request);

    Map<String, Object> response = new HashMap<>();
    response.put("message", "Login successful");
    response.put("authenticationResponse", authenticationResponse);

    return ResponseEntity.ok(response);
}
@GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userRepository.findAll();
        return ResponseEntity.ok(users);
    }
}
