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

    public List<CourseEntity> getCoursesByAcademyId(int academyId) {
        return courseRepository.findByAcademy_AcademyId(academyId);
    }
    

    public CourseEntity getCourseById(int courseId) {
        return courseRepository.findById(courseId).orElse(null);
    }

    public CourseEntity updateCourse(int courseId, CourseEntity updatedCourse) {
        // Retrieve the existing course from the database
        CourseEntity existingCourse = courseRepository.findById(courseId).orElse(null);
        if (existingCourse == null) {
            return null; // Return null if the course doesn't exist
        }
    
        // Retrieve the associated academy of the existing course
        AcademyEntity associatedAcademy = existingCourse.getAcademy();
    
        // Update the fields of the existing course with the values from the updatedCourse
        existingCourse.setCourseName(updatedCourse.getCourseName());
        existingCourse.setTiming(updatedCourse.getTiming());
        existingCourse.setNofstu(updatedCourse.getNofstu());
        existingCourse.setCourseDesc(updatedCourse.getCourseDesc());
    
        // Ensure that the associated academy is preserved
        existingCourse.setAcademy(associatedAcademy);
    
        // Save the updated course to the database
        return courseRepository.save(existingCourse);
    }

    public void deleteCourse(int courseId) {
        courseRepository.deleteById(courseId);
    }
}
