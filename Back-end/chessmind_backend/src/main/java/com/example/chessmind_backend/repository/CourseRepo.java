package com.example.chessmind_backend.repository;

import com.example.chessmind_backend.entity.CourseEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
@Repository
public interface CourseRepo extends JpaRepository<CourseEntity, Integer> {
    CourseEntity findByCourseName(String courseName);
    // List<CourseEntity> findByAcademyId(int academyId);
}
