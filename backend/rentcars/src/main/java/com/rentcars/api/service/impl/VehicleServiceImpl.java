package com.rentcars.api.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rentcars.api.model.Vehicle;
import com.rentcars.api.repository.VehicleRepository;
import com.rentcars.api.service.VehicleService;


@Service
public class VehicleServiceImpl implements VehicleService {
	
	@Autowired
	private VehicleRepository vehicleRepository;
	
	@Override
	public List<Vehicle> getAll() {
		return this.vehicleRepository.findAll();
	}

	@Override
	public Vehicle getById(String id) {
		return this.vehicleRepository
				.findById(id)
				.orElseThrow(() -> new IllegalArgumentException("Esse veículo não existe."));
	}
	
	@Override
	public Vehicle create(Vehicle vehicle) {
		return this.vehicleRepository.save(vehicle);
	}

}
