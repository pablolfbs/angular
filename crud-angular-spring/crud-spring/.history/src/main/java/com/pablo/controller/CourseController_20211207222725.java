package com.pablo.controller;

import java.util.List;

import com.pablo.repository.CourseRepository;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/courses")
public class CourseController {

    private CourseRepository courseRepository;

    // o mesmo que @GetMapping
    // @RequestMapping(method = RequestMethod.GET)
    @GetMapping
    public List<Object> list() {
        return courseRepository.findAll();
    }
    
}
