package ru.kata.spring.boot_security.demo.services;

import ru.kata.spring.boot_security.demo.model.User;

import java.util.List;
import java.util.Set;

public interface UserServices {
    User findByUsername(String name);

    void saveUser(User user);

    void deleteUserById(Long id);
    List<User> getAllUsers();

    User findUserById(Long id);
    void createUser( User user );

    User findByEmail(String email);
}
