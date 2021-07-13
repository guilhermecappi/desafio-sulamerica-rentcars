package com.rentcars.api.service;


import java.util.List;

import com.rentcars.api.model.Vehicle;

public interface VehicleService {
	public List<Vehicle> getAll();
	
	public Vehicle getById(String id);
	
	public Vehicle create(Vehicle vehicle);
}
