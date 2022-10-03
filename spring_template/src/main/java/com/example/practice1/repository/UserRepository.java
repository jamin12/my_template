package com.example.practice1.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.practice1.entity.User;
import com.example.practice1.repository.dslmodel.UserDsl;

@Repository
public interface UserRepository extends JpaRepository<User, Long>, UserDsl {

}
