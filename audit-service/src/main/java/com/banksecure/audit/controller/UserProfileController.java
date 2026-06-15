package com.banksecure.audit.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.banksecure.audit.entity.User;
import com.banksecure.audit.repository.UserRepository;

@RestController
@RequestMapping("/profile")
@CrossOrigin("*")
public class UserProfileController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/{username}")
    public User getProfile(
            @PathVariable String username) {

        Optional<User> user =
                userRepository.findByUsername(username);

        return user.orElse(null);
    }
}