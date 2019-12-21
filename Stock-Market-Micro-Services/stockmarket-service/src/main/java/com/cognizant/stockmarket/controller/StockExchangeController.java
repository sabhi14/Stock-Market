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

import com.cognizant.stockmarket.model.StockExchange;
import com.cognizant.stockmarket.service.StockExchangeService;

@RestController
@RequestMapping("/stock")
public class StockExchangeController {

	@Autowired
	private StockExchangeService seService;

	@PostMapping()
	public void addStockExchange(@RequestBody StockExchange se) {
		try {
			seService.addStockExchange(se);
		} catch (Exception ex) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid stock exchange");
		}
	}

	@GetMapping()
	public List<StockExchange> getStockExchanges() {
		try {
			return seService.getStockExchanges();
		} catch (Exception ex) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid stock exchange");
		}
	}
	
	@GetMapping(value="/{id}")
	public StockExchange getStockExchange(@PathVariable long id) {
		try {
			return seService.getStockExchange(id);
		} catch (Exception ex) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid stock exchange");
		}
	}
	
	@GetMapping(value="/name/{sen}")
	public StockExchange getStockExchangeByName(@PathVariable String sen) {
		try {
			return seService.getStockExchangeByName(sen);
		} catch (Exception ex) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid stock exchange");
		}
	}
	
	public List<StockExchange> addNewStockExchange(StockExchange stockex) {
		return Collections.EMPTY_LIST;
	}

	public List<StockExchange> getAStockExchange() {
		return Collections.EMPTY_LIST;
	}


}
