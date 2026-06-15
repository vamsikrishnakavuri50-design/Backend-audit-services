package com.banksecure.audit.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.banksecure.audit.entity.ActivitySummary;
import com.banksecure.audit.repository.ActivitySummaryRepository;

@Service
public class ActivitySummaryService {

    @Autowired
    private ActivitySummaryRepository repository;

    public ActivitySummary save(ActivitySummary activity) {
        return repository.save(activity);
    }

    public List<ActivitySummary> getAll() {
        return repository.findAll();
    }

    public ActivitySummary getById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}