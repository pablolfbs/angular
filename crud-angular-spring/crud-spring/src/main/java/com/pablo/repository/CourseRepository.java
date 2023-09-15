package com.pablo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pablo.model.Course;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {
    
}
