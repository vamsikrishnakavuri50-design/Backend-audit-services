package com.banksecure.audit.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.banksecure.audit.entity.ActivityLog;
import com.banksecure.audit.repository.ActivityLogRepository;

@RestController
@RequestMapping("/activity")
@CrossOrigin("*")
public class ActivityLogController {

    @Autowired
    private ActivityLogRepository repository;

    @GetMapping("/{username}")
    public List<ActivityLog> getActivities(
            @PathVariable String username) {

        return repository.findByUsername(username);
    }
}