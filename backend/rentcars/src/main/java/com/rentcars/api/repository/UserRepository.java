package com.rentcars.api.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.rentcars.api.model.User;

public interface UserRepository extends MongoRepository<User, String>{
	@Query("{email:?0}")
	Optional<User> findUserByEmail(String email);
}
