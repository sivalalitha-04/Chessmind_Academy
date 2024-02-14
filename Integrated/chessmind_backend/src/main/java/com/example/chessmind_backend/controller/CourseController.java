package com.example.chessmind_backend.controller;

import com.example.chessmind_backend.entity.CourseEntity;
import com.example.chessmind_backend.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/api/courses")
public class CourseController {

    @Autowired
    private CourseService courseService;

    @PostMapping("/{academyId}")
    public ResponseEntity<CourseEntity> createCourse(@PathVariable int academyId, @RequestBody CourseEntity course) {
        CourseEntity createdCourse = courseService.createCourse(academyId, course);
        return new ResponseEntity<>(createdCourse, HttpStatus.CREATED);
    }

    @GetMapping("/academy/{academyId}")
    public ResponseEntity<List<CourseEntity>> getCoursesByAcademyId(@PathVariable int academyId) {
    List<CourseEntity> courses = courseService.getCoursesByAcademyId(academyId);
    return ResponseEntity.ok(courses);
    }

    @GetMapping("/{courseId}")
    public ResponseEntity<CourseEntity> getCourseById(@PathVariable int courseId) {
        CourseEntity course = courseService.getCourseById(courseId);
        return ResponseEntity.ok(course);
    }

    @PutMapping("/{courseId}")
    public ResponseEntity<CourseEntity> updateCourse(@PathVariable int courseId, @RequestBody CourseEntity course) {
        CourseEntity updatedCourse = courseService.updateCourse(courseId, course);
        return ResponseEntity.ok(updatedCourse);
    }

    @DeleteMapping("/{courseId}")
    public ResponseEntity<Void> deleteCourse(@PathVariable int courseId) {
        courseService.deleteCourse(courseId);
        return ResponseEntity.noContent().build();
    }
}
