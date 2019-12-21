package com.cognizant.stockmarket.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.cognizant.stockmarket.model.Sectors;
import com.cognizant.stockmarket.repository.SectorRepository;

@Component
public class SectorService {

	@Autowired
	private SectorRepository sectorRepo;

	public Sectors getSector(long id) {
		return sectorRepo.findSectorById(id);
	}
}
