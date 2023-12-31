package ru.kata.spring.boot_security.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.kata.spring.boot_security.demo.model.User;
import ru.kata.spring.boot_security.demo.services.UserServices;

import java.security.Principal;

@RestController
@RequestMapping("/api/user")
public class UserRESTController {

    private final UserServices userServices;

    @Autowired
    public UserRESTController(UserServices userServices) {
        this.userServices = userServices;
    }

    @GetMapping("/")
    public User getUser(Principal principal) {
        return userServices.findByEmail( principal.getName());
    } // получаем пользователя по имени
}
