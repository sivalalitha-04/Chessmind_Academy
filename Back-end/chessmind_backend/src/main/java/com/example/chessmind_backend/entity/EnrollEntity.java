package com.example.chessmind_backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
public class EnrollEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int enrollId;

    @ManyToOne
    @JoinColumn(name = "user_id") 
    private User user; 

    @ManyToOne
    @JoinColumn(name = "academy_id")
    private AcademyEntity academy;

    @ManyToOne
    @JoinColumn(name = "course_id")
    private CourseEntity course;

    private LocalDate joinDate;
}
