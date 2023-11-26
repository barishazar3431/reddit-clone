package com.example.redditclonebackend.post;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/posts")
public class PostController {

    @GetMapping("/hello")
    public String test() {
        return "Hello from test";
    }

}
