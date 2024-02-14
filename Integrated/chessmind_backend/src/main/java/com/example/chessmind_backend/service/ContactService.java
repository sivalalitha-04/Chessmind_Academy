package com.example.chessmind_backend.service;

import com.example.chessmind_backend.entity.Contact;
import com.example.chessmind_backend.repository.ContactRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContactService {

    private final ContactRepo contactRepo;

    @Autowired
    public ContactService(ContactRepo contactRepo) {
        this.contactRepo = contactRepo;
    }

    public Contact createContact(Contact contact) {
        return contactRepo.save(contact);
    }

    public Contact getContactById(int id) {
        return contactRepo.findById(id).orElse(null);
    }
}
