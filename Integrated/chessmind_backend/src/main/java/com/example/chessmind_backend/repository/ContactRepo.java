package com.example.chessmind_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.chessmind_backend.entity.Contact;

@Repository
public interface ContactRepo extends JpaRepository<Contact,Integer> {

}
