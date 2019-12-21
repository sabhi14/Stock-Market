package com.cognizant.stockmarket.controller;

import java.util.Collections;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.cognizant.stockmarket.model.User;
import com.cognizant.stockmarket.service.AppUserDetailService;

@RestController
@RequestMapping(value = "/users")
public class UserController {

	@Autowired
	private AppUserDetailService appUserService;

	private static final Logger LOGGER = LoggerFactory.getLogger(UserController.class);

	@PostMapping()
	public User signUp(@RequestBody User user) {

		try {
			appUserService.signUp(user);
		} catch (Exception ex) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid Request");
		}
		return user;

	}

	@PutMapping()
	public User updateProfile(@RequestBody User user) {

		try {
			return appUserService.updateProfile(user);
		} catch (Exception ex) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid Request");
		}

	}

	@GetMapping(value = "/confirm/{id}/{email}")
	public String confirmUser(@PathVariable long id, @PathVariable String email) {
		try {
			appUserService.confirmUser(id, email);
			return "EMAIL CONFIRMATION SUCCESSFUL";
		} catch (Exception ex) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid Request");
		}
	}
	
	
	@PostMapping(value = "/passwordCheck/{id}")
	public boolean checkOldPassword(@RequestBody String oldPassword,@PathVariable long id)
	{
		BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
		User user = appUserService.getUser(id);
		return bCryptPasswordEncoder.matches(oldPassword, user.getPassword());		
	}
	
	@GetMapping(value = "/{id}")
	public User getUser(@PathVariable long id) {
		try {
			return appUserService.getUser(id);
		} catch (Exception ex) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid Request");
		}
	}
	
	@GetMapping(value = "/name/{username}")
	public long getUserByUserName(@PathVariable String username) {
		try {
			return appUserService.getUserByName(username);
		} catch (Exception ex) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid Request");
		}
	}

	@PutMapping(value = "/password")
	public User updateUserPassword(@RequestBody User user) {

		try {
			appUserService.updateUserPassword(user);
		} catch (Exception ex) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid Request");
		}
		return user;

	}
	
	public List<User> getAUser() {
		return Collections.EMPTY_LIST;
	}


}
