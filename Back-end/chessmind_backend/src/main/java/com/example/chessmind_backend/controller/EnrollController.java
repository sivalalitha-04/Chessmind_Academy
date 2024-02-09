package com.example.chessmind_backend.controller;

import com.example.chessmind_backend.entity.StudentEntity;
import com.example.chessmind_backend.service.EnrollService;

import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/enroll")
public class EnrollController {

    @Autowired
    private EnrollService enrollService;

    @PostMapping("/{acadId}/{courseId}/{userId}") // Add userId parameter
public ResponseEntity<String> enrollStudent(@PathVariable int acadId,
                                            @PathVariable int courseId,
                                            @PathVariable int userId, // Add userId parameter
                                            @RequestBody StudentEntity student) {
        boolean enrolled = enrollService.enrollStudent(student, acadId, courseId, userId); // Pass userId
        if (enrolled) {
            return ResponseEntity.ok("User enrolled successfully.");
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to enroll user.");
        }
    }

    @DeleteMapping("/{enrollId}")
    public ResponseEntity<String> deleteEnrolledCourseById(@PathVariable int enrollId) {
        try {
            enrollService.deleteEnrolledCourseById(enrollId);
            System.out.println("Enrolled course deleted successfully.");
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Enrolled course deleted successfully.");
        } catch (NoSuchElementException e) {
            System.err.println("Enrolled course not found.");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Enrolled course not found.");
        } catch (Exception e) {
            System.err.println("An unexpected error occurred: " + e.getMessage());
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An unexpected error occurred.");
        }
    }
}