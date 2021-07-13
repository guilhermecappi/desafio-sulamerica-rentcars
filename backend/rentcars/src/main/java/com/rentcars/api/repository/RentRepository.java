package com.rentcars.api.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.rentcars.api.model.Rent;

public interface RentRepository extends MongoRepository<Rent, String>{

}
