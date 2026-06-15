package com.banksecure.audit.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.banksecure.audit.entity.AuditReport;
import com.banksecure.audit.service.AuditReportService;

@RestController
@RequestMapping("/audit")
@CrossOrigin("*")
public class AuditReportController {

    @Autowired
    private AuditReportService service;

    @PostMapping
    public AuditReport addReport(@RequestBody AuditReport report) {
        return service.save(report);
    }

    @GetMapping
    public List<AuditReport> getAllReports() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public AuditReport getReport(@PathVariable Long id) {
        return service.getById(id);
    }

    @DeleteMapping("/{id}")
    public String deleteReport(@PathVariable Long id) {
        service.delete(id);
        return "Audit Report Deleted Successfully";
    }
}