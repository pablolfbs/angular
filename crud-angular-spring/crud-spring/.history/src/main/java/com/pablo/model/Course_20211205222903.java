package com.pablo.model;

import javax.persistence.Entity;

import lombok.Data;

@Data
@Entity(name = "courses")
public class Course {

    private Long id;

    private String name;
    
    private String category;
    
}
