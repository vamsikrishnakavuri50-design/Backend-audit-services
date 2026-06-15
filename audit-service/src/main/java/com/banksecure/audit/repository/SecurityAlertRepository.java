package com.banksecure.audit.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.banksecure.audit.entity.SecurityAlert;

public interface SecurityAlertRepository
        extends JpaRepository<SecurityAlert, Long> {

}