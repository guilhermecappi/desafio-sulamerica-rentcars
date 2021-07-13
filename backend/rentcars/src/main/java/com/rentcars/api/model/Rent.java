package com.rentcars.api.model;

import java.util.Date;

import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection="rents")
public class Rent {
	private String id;
	private Date pickupDate;
	private Date dropoffDate;
	private String userId;
	private String vehicleId;
	
	public Rent(Date pickupDate, Date dropoffDate, String userId, String vehicleId) {
		super();
		this.pickupDate = pickupDate;
		this.dropoffDate = dropoffDate;
		this.userId = userId;
		this.vehicleId = vehicleId;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Date getPickupDate() {
		return pickupDate;
	}

	public void setPickupDate(Date pickupDate) {
		this.pickupDate = pickupDate;
	}

	public Date getDropoffDate() {
		return dropoffDate;
	}

	public void setDropoffDate(Date dropoffDate) {
		this.dropoffDate = dropoffDate;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getVehicleId() {
		return vehicleId;
	}

	public void setVehicleId(String vehicleId) {
		this.vehicleId = vehicleId;
	}
	
	
}
