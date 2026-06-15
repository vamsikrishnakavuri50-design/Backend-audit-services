package com.banksecure.audit.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.banksecure.audit.entity.AuditReport;
import com.banksecure.audit.repository.AuditReportRepository;

@Service
public class AuditReportService {

    @Autowired
    private AuditReportRepository repository;

    public AuditReport save(AuditReport report) {
        return repository.save(report);
    }

    public List<AuditReport> getAll() {
        return repository.findAll();
    }

    public AuditReport getById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}