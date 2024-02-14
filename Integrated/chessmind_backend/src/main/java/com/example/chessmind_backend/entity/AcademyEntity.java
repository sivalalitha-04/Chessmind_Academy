package com.example.chessmind_backend.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
public class AcademyEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int academyId;
    private String academyName;
    private String academyDesc;
    private String email;
    private String location;
    private long contact;
    private String rating;
    private String img;

    @OneToMany(mappedBy = "academy", cascade = CascadeType.ALL,orphanRemoval = true, fetch = FetchType.LAZY)
    private List<CourseEntity> courses;
}
