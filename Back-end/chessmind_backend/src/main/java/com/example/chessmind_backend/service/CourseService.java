package com.example.chessmind_backend.service;

import com.example.chessmind_backend.entity.AcademyEntity;
import com.example.chessmind_backend.entity.CourseEntity;
import com.example.chessmind_backend.repository.AcademyRepo;
import com.example.chessmind_backend.repository.CourseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CourseService {

    @Autowired
    private CourseRepo courseRepository;

    @Autowired
    private AcademyRepo academyRepository;

    public CourseEntity createCourse(int academyId, CourseEntity course) {
        AcademyEntity academy = academyRepository.findById(academyId).orElse(null);
        if (academy != null) {
            course.setAcademy(academy);
            return courseRepository.save(course);
        }
        return null;
    }

    // public List<CourseEntity> getCoursesByAcademyId(int acadId){
    //     return courseRepository.findByAcademyId(acadId);
    // }

    public CourseEntity getCourseById(int courseId) {
        return courseRepository.findById(courseId).orElse(null);
    }

    public CourseEntity updateCourse(int courseId, CourseEntity updatedCourse) {
        if (!courseRepository.existsById(courseId)) {
            return null;
        }
        updatedCourse.setCourseId(courseId);
        return courseRepository.save(updatedCourse);
    }

    public void deleteCourse(int courseId) {
        courseRepository.deleteById(courseId);
    }
}
