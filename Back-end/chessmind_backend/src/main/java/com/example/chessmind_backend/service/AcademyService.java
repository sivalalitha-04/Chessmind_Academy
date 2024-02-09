package com.example.chessmind_backend.service;

import com.example.chessmind_backend.entity.AcademyEntity;
import com.example.chessmind_backend.repository.AcademyRepo;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AcademyService {

    @Autowired
    private AcademyRepo academyRepository;

    public AcademyEntity createAcademy(AcademyEntity academy) {
        return academyRepository.save(academy);
    }

    public AcademyEntity getAcademyById(int academyId) {
        return academyRepository.findById(academyId).orElse(null);
    }

    public List<AcademyEntity> getAllAcademies() {
        return academyRepository.findAll();
    }
    
    public AcademyEntity updateAcademy(int academyId, AcademyEntity updatedAcademy) {
        if (!academyRepository.existsById(academyId)) {
            return null;
        }
        updatedAcademy.setAcademyId(academyId);
        return academyRepository.save(updatedAcademy);
    }

    public void deleteAcademy(int academyId) {
        academyRepository.deleteById(academyId);
    }
}
