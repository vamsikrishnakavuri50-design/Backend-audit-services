package com.banksecure.audit.auth;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.banksecure.audit.entity.ActivityLog;
import com.banksecure.audit.entity.User;
import com.banksecure.audit.repository.ActivityLogRepository;
import com.banksecure.audit.repository.UserRepository;

@RestController
@RequestMapping("/auth")
@CrossOrigin("*")
public class AuthController {

    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private ActivityLogRepository activityRepository;

    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> login(
            @RequestBody LoginRequest request) {

        Optional<User> user =
                userRepository.findByUsername(
                        request.getUsername());

        Map<String, String> response =
                new HashMap<>();

        if (user.isPresent()
                && user.get()
                       .getPassword()
                       .equals(request.getPassword())) {

            ActivityLog log = new ActivityLog();

            log.setUsername(
                    user.get().getUsername());

            log.setActivity("Login");

            log.setStatus("Success");

            activityRepository.save(log);

            response.put("message", "Login Successful");
            response.put("username", user.get().getUsername());
            response.put("role", user.get().getRole());

            return ResponseEntity.ok(response);
        }
        response.put("message", "Invalid Credentials");
        return ResponseEntity .status(HttpStatus.UNAUTHORIZED) 
        		.body(response);
    }
}