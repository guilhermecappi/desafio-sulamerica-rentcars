package com.rentcars.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rentcars.api.model.Vehicle;
import com.rentcars.api.service.VehicleService;

@CrossOrigin
@RestController
@RequestMapping("/vehicles")
public class VehicleController {
	
	@Autowired
	private VehicleService vehicleService;
	
	@GetMapping
	public List<Vehicle> getAll() {
		return this.vehicleService.getAll();
	}
	
	@GetMapping("/{id}")
	public Vehicle getById(@PathVariable String id) {
		return this.vehicleService.getById(id);
	}
	
	@PostMapping
	public Vehicle create(@RequestBody Vehicle vehicle) {
		return this.vehicleService.create(vehicle);
	}
}

