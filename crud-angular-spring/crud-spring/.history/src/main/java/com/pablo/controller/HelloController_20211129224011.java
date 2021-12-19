package com.pablo.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    
    @RequestMapping("/api/hello")
    public String hello() {
        return "Hello World!";
    }
    
}
