package com.rentcars.api.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rentcars.api.model.Rent;
import com.rentcars.api.repository.RentRepository;
import com.rentcars.api.service.RentService;

@Service
public class RentServiceImpl implements RentService{
	@Autowired
	private RentRepository rentRepository;
	
	@Override
	public List<Rent> getAll() {
		return this.rentRepository.findAll();
	}

	@Override
	public Rent rentVehicle(Rent rent) {
		return this.rentRepository.save(rent);
	}

}
