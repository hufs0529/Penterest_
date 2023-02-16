package com.example.LoginTest.infrastructure;



import com.example.LoginTest.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
    Optional<User> findById(Long userId);
    Optional<User> findByEmailAddress(String emailAddress);
}

