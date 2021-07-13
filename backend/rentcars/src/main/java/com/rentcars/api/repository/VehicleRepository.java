package com.rentcars.api.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.rentcars.api.model.Vehicle;

public interface VehicleRepository extends MongoRepository<Vehicle, String>{

}
