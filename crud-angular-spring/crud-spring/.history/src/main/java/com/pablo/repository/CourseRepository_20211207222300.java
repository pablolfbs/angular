package com.pablo.repository;

import com.pablo.model.Course;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepository extends JpaRepository<Long, Course.class> {
    
}
