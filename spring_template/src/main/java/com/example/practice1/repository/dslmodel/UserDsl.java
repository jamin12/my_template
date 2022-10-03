package com.example.practice1.repository.dslmodel;

import java.util.List;
import java.util.Optional;

import com.example.practice1.entity.User;

public interface UserDsl {
    List<User> getUserByEmail(String email);
}
