package com.lioc.lioc_backend.repository;

import com.lioc.lioc_backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Integer> {
}
