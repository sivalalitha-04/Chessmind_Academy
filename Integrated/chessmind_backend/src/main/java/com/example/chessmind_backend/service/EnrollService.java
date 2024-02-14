package com.example.chessmind_backend.service;

import com.example.chessmind_backend.entity.AcademyEntity;
import com.example.chessmind_backend.entity.CourseEntity;
import com.example.chessmind_backend.entity.EnrollEntity;
import com.example.chessmind_backend.entity.StudentEntity;
import com.example.chessmind_backend.entity.User;
import com.example.chessmind_backend.repository.AcademyRepo;
import com.example.chessmind_backend.repository.CourseRepo;
import com.example.chessmind_backend.repository.EnrollRepo;
import com.example.chessmind_backend.repository.UserRepository; // Import UserRepository
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.time.LocalDate;

@Service
public class EnrollService {

    @Autowired
    private EnrollRepo enrollRepository;

    @Autowired
    private AcademyRepo academyRepository;

    @Autowired
    private CourseRepo courseRepository;

    @Autowired
    private UserRepository userRepository; // Autowire UserRepository

    public boolean enrollStudent(StudentEntity student, int acadId, int courseId, long userId) {
        try {
            User user = userRepository.findById(userId).orElse(null); // Fetch user by ID
            AcademyEntity academy = academyRepository.findById(acadId).orElse(null);
            CourseEntity course = courseRepository.findById(courseId).orElse(null);

            if (user != null && academy != null && course != null) { // Check if user, academy, and course exist
                EnrollEntity enrollment = new EnrollEntity();
                enrollment.setUser(user); // Set user
                enrollment.setAcademy(academy);
                enrollment.setCourse(course);
                enrollment.setJoinDate(LocalDate.now()); // Set join date to current date
                enrollRepository.save(enrollment);
                return true;
            } else {
                return false; 
            }
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    public List<EnrollEntity> getAllEnrollments() {
        return enrollRepository.findAll();
    }

    public void deleteEnrolledCourseById(int enrollId) {
        enrollRepository.deleteById(enrollId);
    }
}
