package com.banksecure.audit.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.banksecure.audit.entity.SecurityAlert;
import com.banksecure.audit.repository.SecurityAlertRepository;

@Service
public class SecurityAlertService {

    @Autowired
    private SecurityAlertRepository repository;

    public SecurityAlert save(SecurityAlert alert) {
        return repository.save(alert);
    }

    public List<SecurityAlert> getAll() {
        return repository.findAll();
    }

    public SecurityAlert getById(Long id) {
        return repository.findById(id)
                .orElse(null);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}