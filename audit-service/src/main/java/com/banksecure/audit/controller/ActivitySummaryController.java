package com.banksecure.audit.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.banksecure.audit.entity.ActivitySummary;
import com.banksecure.audit.service.ActivitySummaryService;

@RestController
@RequestMapping("/activities")
@CrossOrigin("*")
public class ActivitySummaryController {

    @Autowired
    private ActivitySummaryService service;

    @PostMapping
    public ActivitySummary addActivity(@RequestBody ActivitySummary activity) {
        return service.save(activity);
    }

    @GetMapping
    public List<ActivitySummary> getAllActivities() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public ActivitySummary getActivity(@PathVariable Long id) {
        return service.getById(id);
    }

    @DeleteMapping("/{id}")
    public String deleteActivity(@PathVariable Long id) {
        service.delete(id);
        return "Activity Deleted Successfully";
    }
}