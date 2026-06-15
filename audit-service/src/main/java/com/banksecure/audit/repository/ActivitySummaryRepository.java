package com.banksecure.audit.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.banksecure.audit.entity.ActivitySummary;

public interface ActivitySummaryRepository
        extends JpaRepository<ActivitySummary, Long> {

}