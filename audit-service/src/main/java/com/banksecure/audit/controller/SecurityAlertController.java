package com.banksecure.audit.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.banksecure.audit.entity.SecurityAlert;
import com.banksecure.audit.service.SecurityAlertService;

@RestController
@RequestMapping("/alerts")
@CrossOrigin("*")
public class SecurityAlertController {

    @Autowired
    private SecurityAlertService service;

    @PostMapping
    public SecurityAlert addAlert(
            @RequestBody SecurityAlert alert) {

        return service.save(alert);
    }

    @GetMapping
    public List<SecurityAlert> getAlerts() {

        return service.getAll();
    }

    @GetMapping("/{id}")
    public SecurityAlert getAlert(
            @PathVariable Long id) {

        return service.getById(id);
    }

    @DeleteMapping("/{id}")
    public String deleteAlert(
            @PathVariable Long id) {

        service.delete(id);

        return "Alert Deleted Successfully";
    }
}