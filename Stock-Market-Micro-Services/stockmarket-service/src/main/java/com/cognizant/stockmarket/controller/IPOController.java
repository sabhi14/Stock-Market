/**
 * 
 */
package com.cognizant.stockmarket.controller;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.cognizant.stockmarket.model.IPODetails;
import com.cognizant.stockmarket.service.IPOService;

@RestController
@RequestMapping("/ipo")
public class IPOController {

	@Autowired
	private IPOService ipoService;

	@PostMapping()
	public void addIPO(@RequestBody IPODetails ipo) {
		try {
			ipoService.addIPO(ipo);
		} catch (Exception ex) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid IPO details");
		}
	}

	@GetMapping()
	public List<IPODetails> getIPO() {
		try {
			return ipoService.getIPO();
		} catch (Exception ex) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid IPO details");
		}
	}
	
	@GetMapping(value="/{id}")
	public IPODetails getIPOById(@PathVariable long id) {
		try {
			return ipoService.getIPOById(id);
		} catch (Exception ex) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid IPO details");
		}
	}
	
	public List<IPODetails> addNewIPO(IPODetails ipo3) {

		return Collections.EMPTY_LIST;
	}

	public List<IPODetails> getIPOs() {
		return Collections.EMPTY_LIST;
	}

	public IPODetails getIPODetailsById(int i) {
		return null;
	}


}
