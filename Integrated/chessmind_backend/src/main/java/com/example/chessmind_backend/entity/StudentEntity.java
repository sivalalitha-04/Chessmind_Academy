package com.example.chessmind_backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class StudentEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int studentId;
    private String firstName;
    private String lastName;
    private String fatherName;
    private String motherName;
    private String gender;
    private int age;
    private long contact;
    private long alcontact;
    private String email;
    private String houseNo;
    private String streetName;
    private String areaName;
    private int pincode;
    private String state;
    private String country;
}
