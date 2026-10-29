package com.physiodr.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "bookings")
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    private String phone;
    private String email;
    private Integer age;
    private String problem;
    private String service;
    private String doctor;
    private String date;
    private String time;
    private String status;
    
    @Column(name = "created_at")
    private LocalDateTime createdAt;
    
    // Constructors
    public Booking() {}
    
    public Booking(String name, String phone, String email, Integer age, String problem, 
                   String service, String doctor, String date, String time) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.age = age;
        this.problem = problem;
        this.service = service;
        this.doctor = doctor;
        this.date = date;
        this.time = time;
        this.status = "Pending";
        this.createdAt = LocalDateTime.now();
    }
    
    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }
    
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    
    public Integer getAge() { return age; }
    public void setAge(Integer age) { this.age = age; }
    
    public String getProblem() { return problem; }
    public void setProblem(String problem) { this.problem = problem; }
    
    public String getService() { return service; }
    public void setService(String service) { this.service = service; }
    
    public String getDoctor() { return doctor; }
    public void setDoctor(String doctor) { this.doctor = doctor; }
    
    public String getDate() { return date; }
    public void setDate(String date) { this.date = date; }
    
    public String getTime() { return time; }
    public void setTime(String time) { this.time = time; }
    
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    
    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
