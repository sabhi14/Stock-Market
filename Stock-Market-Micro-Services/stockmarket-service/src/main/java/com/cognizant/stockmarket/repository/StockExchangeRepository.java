package com.cognizant.stockmarket.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cognizant.stockmarket.model.StockExchange;

@Repository
public interface StockExchangeRepository extends JpaRepository<StockExchange, Integer> {

	@Query(value = "SELECT stock_exchange_id, brief, contact_address,remarks,stock_exchange_name FROM stock_exchange WHERE stock_exchange_id=?;", nativeQuery = true)
	StockExchange findStockExchangeById(long id);
	
	@Query(value = "SELECT stock_exchange_id, brief, contact_address,remarks,stock_exchange_name FROM stock_exchange WHERE stock_exchange_name=?;", nativeQuery = true)
	StockExchange findStockExchangeByName(String sen);

}
