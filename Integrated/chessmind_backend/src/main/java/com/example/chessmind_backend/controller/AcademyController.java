package com.example.chessmind_backend.controller;

import com.example.chessmind_backend.entity.AcademyEntity;
import com.example.chessmind_backend.service.AcademyService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/academies")
public class AcademyController {

    @Autowired
    private AcademyService academyService;

    @PostMapping
    public ResponseEntity<AcademyEntity> createAcademy(@RequestBody AcademyEntity academy) {
        AcademyEntity createdAcademy = academyService.createAcademy(academy);
        return new ResponseEntity<>(createdAcademy, HttpStatus.CREATED);
    }
    @GetMapping
    public ResponseEntity<List<AcademyEntity>> getAllAcademies() {
    List<AcademyEntity> academies = academyService.getAllAcademies();
    return ResponseEntity.ok(academies);
}

    @GetMapping("/{academyId}")
    public ResponseEntity<AcademyEntity> getAcademyById(@PathVariable int academyId) {
        AcademyEntity academy = academyService.getAcademyById(academyId);
        return ResponseEntity.ok(academy);
    }

    @PutMapping("/{academyId}")
    public ResponseEntity<AcademyEntity> updateAcademy(@PathVariable int academyId, @RequestBody AcademyEntity academy) {
        AcademyEntity updatedAcademy = academyService.updateAcademy(academyId, academy);
        return ResponseEntity.ok(updatedAcademy);
    }

    @DeleteMapping("/{academyId}")
    public ResponseEntity<Void> deleteAcademy(@PathVariable int academyId) {
        academyService.deleteAcademy(academyId);
        return ResponseEntity.noContent().build();
    }
}
