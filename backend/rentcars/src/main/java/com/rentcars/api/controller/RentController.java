package com.rentcars.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rentcars.api.model.Rent;
import com.rentcars.api.service.RentService;


@CrossOrigin
@RestController
@RequestMapping("/rents")
public class RentController {
	@Autowired
	private RentService rentService;
	
	@GetMapping
	public List<Rent> getAll(){
		return this.rentService.getAll();
	}
	
	@PostMapping
	public Rent rentVehicle(@RequestBody Rent rent) {
		return this.rentService.rentVehicle(rent);
	}
}
