/**
 * 
 */
package com.cognizant.stockmarket.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.cognizant.stockmarket.model.Sectors;
import com.cognizant.stockmarket.service.SectorService;

@RestController
@RequestMapping("/sector")
public class SectorController {

	@Autowired
	private SectorService sectorService;

	@GetMapping(value="/{id}")
	public Sectors getSector(@PathVariable long id) {
		try {
			return sectorService.getSector(id);
		} catch (Exception ex) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid sector");
		}
	}
	
	

}
