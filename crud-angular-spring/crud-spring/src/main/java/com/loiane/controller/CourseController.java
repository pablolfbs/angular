package com.loiane.controller;

import java.util.List;

import com.loiane.model.Course;
import com.loiane.repository.CourseRepository;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/courses")
public class CourseController {

    // instanciado via construtor
    // @Autowired
    private final CourseRepository courseRepository;

    // criado via Lombok
    // public CourseController(CourseRepository courseRepository) {
    //     this.courseRepository = courseRepository;
    // }

    // o mesmo que @GetMapping
    // @RequestMapping(method = RequestMethod.GET)
    @GetMapping
    public List<Course> list() {
        return courseRepository.findAll();
    }
    
}
