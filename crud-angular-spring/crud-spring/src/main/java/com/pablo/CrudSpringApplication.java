package com.pablo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.pablo.model.Course;
import com.pablo.repository.CourseRepository;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(CourseRepository courseRepository) {
		return args -> {
			courseRepository.deleteAll();

			Course c1 = new Course();
			c1.setName("Angular com Spring");
			c1.setCategory("front-end");

			Course c2 = new Course();
			c2.setName("Spring");
			c2.setCategory("back-end");

			courseRepository.save(c1);
			courseRepository.save(c2);
		};
	}

}
