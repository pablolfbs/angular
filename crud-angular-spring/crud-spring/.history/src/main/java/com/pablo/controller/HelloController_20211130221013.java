package com.pablo.controller;

import java.util.HashMap;
import java.util.Map;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/hello")
public class HelloController {
    
    @GetMapping
    public String hello() {
        Gson gson = new GsonBuilder().create();
        Map map = new HashMap<>();
        map.put("msg", "Hello World!");
        return gson.toJson(map);
    }
    
}
