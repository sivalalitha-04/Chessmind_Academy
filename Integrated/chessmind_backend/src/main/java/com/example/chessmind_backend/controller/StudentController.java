package com.example.chessmind_backend.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.chessmind_backend.entity.StudentEntity;
import com.example.chessmind_backend.repository.StudentRepo;

@RestController
public class StudentController {

    @Autowired
    private StudentRepo enrollmentRepo;

    @SuppressWarnings("null")
    @PostMapping("/api/enrollments")
    public ResponseEntity<String> enroll(@RequestBody StudentEntity Form) {
        enrollmentRepo.save(Form);
        return ResponseEntity.status(HttpStatus.CREATED).body("Enrollment successful");
    }
}
