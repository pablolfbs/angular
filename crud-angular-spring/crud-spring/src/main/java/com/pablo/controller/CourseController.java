package com.pablo.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.pablo.model.Course;
import com.pablo.repository.CourseRepository;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/courses")
@AllArgsConstructor
public class CourseController {

    private final CourseRepository courseRepository;

    @GetMapping
    public List<Course> list() {
        return courseRepository.findAll();
    }

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public Course create(@RequestBody Course course) {
        return courseRepository.save(course);
    }

    // Outra abordagem do método create, sendo que usando o ResponseEntity como resposta;
    // Desta forma podemos manusear cabeçalho entro outras modificações
    // @PostMapping
    // public ResponseEntity<Course> create(@RequestBody Course course) {
    //     return ResponseEntity.status(HttpStatus.CREATED).body(courseRepository.save(course));
    // }

    @GetMapping("/{id}")
    public ResponseEntity<Course> findById(@PathVariable Long id) {
        return courseRepository.findById(id)
                               .map(course -> ResponseEntity.ok().body(course))
                               .orElse(ResponseEntity.notFound().build());
    }

    // @DeleteMapping
    // @ResponseStatus
    // public void delete(@RequestBody Course course) {
    //     courseRepository.delete(course);
    // }
    
}
