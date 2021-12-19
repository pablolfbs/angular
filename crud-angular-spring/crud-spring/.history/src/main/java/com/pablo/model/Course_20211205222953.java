package com.pablo.model;

import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
// @Table(name = "courses")
public class Course {

    private Long id;

    private String name;
    
    private String category;
    
}
