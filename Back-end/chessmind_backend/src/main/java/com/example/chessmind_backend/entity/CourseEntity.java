package com.example.chessmind_backend.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class CourseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int courseId;
    private String courseName;
    private String courseDesc;
    private String timing;
    private int nofstu;

    @ManyToOne
    @JoinColumn(name = "acad_id")
    // @JsonBackReference
    private AcademyEntity academy;
}
