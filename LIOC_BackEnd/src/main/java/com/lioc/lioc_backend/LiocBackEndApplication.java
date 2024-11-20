package com.lioc.lioc_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories(basePackages = "com.lioc.lioc_backend.repository")
@SpringBootApplication
public class LiocBackEndApplication {

    public static void main(String[] args) {
        SpringApplication.run(LiocBackEndApplication.class, args);
    }

}
