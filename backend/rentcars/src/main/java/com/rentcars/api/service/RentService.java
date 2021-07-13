package com.rentcars.api.service;

import java.util.List;

import com.rentcars.api.model.Rent;

public interface RentService {
	public List<Rent> getAll();
	
	public Rent rentVehicle(Rent rent);
}
