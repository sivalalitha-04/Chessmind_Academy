package com.example.chessmind_backend.repository;

import com.example.chessmind_backend.entity.AcademyEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AcademyRepo extends JpaRepository<AcademyEntity, Integer> {
    AcademyEntity findByAcademyName(String academyName);
}
