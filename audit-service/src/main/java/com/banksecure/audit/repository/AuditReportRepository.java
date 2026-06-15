package com.banksecure.audit.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.banksecure.audit.entity.AuditReport;

public interface AuditReportRepository
        extends JpaRepository<AuditReport, Long> {

}