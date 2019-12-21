package com.cognizant.stockmarket.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.cognizant.stockmarket.model.StockExchange;
import com.cognizant.stockmarket.repository.StockExchangeRepository;

@Component
public class StockExchangeService {

	@Autowired
	private StockExchangeRepository seRepo;

	public void addStockExchange(StockExchange se) {
		seRepo.save(se);
	}

	public List<StockExchange> getStockExchanges() {
		return seRepo.findAll();
	}

	public StockExchange getStockExchange(long id) {
		return seRepo.findStockExchangeById(id);
	}

	public StockExchange getStockExchangeByName(String sen) {
		return seRepo.findStockExchangeByName(sen);
	}

}
