package com.rentcars.api.service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rentcars.api.model.User;
import com.rentcars.api.repository.UserRepository;
import com.rentcars.api.service.UserService;

@Service
public class UserServiceImpl implements UserService{
	@Autowired
	private UserRepository userRepository;
	
	@Override
	public User logIn(User user) {
		String requestBodyEmail = user.getEmail();
		Optional<User> opt = this.userRepository.findById(requestBodyEmail);
		if(opt.isPresent()) {
			String requestBodyName = user.getName();
			User userExists = opt.get();
			
			if(userExists.getName() != requestBodyName) {
				user.setName(requestBodyName);
				return this.userRepository.save(userExists);
			} else {
				return userExists;
			}
		} else {
			return this.userRepository.save(user);
		}
	}

}
