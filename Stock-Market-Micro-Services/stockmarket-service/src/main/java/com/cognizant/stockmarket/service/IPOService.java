package com.cognizant.stockmarket.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.cognizant.stockmarket.model.IPODetails;
import com.cognizant.stockmarket.repository.IPORepository;

@Component
public class IPOService {

	@Autowired
	private IPORepository ipoRepo;

	public void addIPO(IPODetails ipo) {
		ipoRepo.save(ipo);
	}

	public List<IPODetails> getIPO() {
		return ipoRepo.findAll();
	}

	public IPODetails getIPOById(long id) {
		return ipoRepo.findById(id).get();
	}

}
