package com.cognizant.stockmarket.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cognizant.stockmarket.model.StockPrice;

@Repository
public interface StockRepository extends JpaRepository<StockPrice, Integer> {

	@Query(value = "SELECT stockprice_id,company,stock_exchange,date,stock_price " + "FROM stock_price "
			+ "WHERE company=? AND (date BETWEEN (CURDATE()-INTERVAL 7 DAY) AND CURDATE()) AND stock_exchange=? ORDER BY date", nativeQuery = true)
	List<StockPrice> getStockPricesByCompanyLastWeek(long id,String s);

	@Query(value = "SELECT stockprice_id,company,stock_exchange,date,stock_price " + "FROM stock_price "
			+ "WHERE company=? AND (date BETWEEN (CURDATE()-INTERVAL 1 MONTH) AND CURDATE()) AND stock_exchange=? ORDER BY date", nativeQuery = true)
	List<StockPrice> getStockPricesByCompanyLastMonth(long id,String s);

	@Query(value = "SELECT stockprice_id,company,stock_exchange,date,stock_price " + "FROM stock_price "
			+ "WHERE company=? AND (date BETWEEN (CURDATE()-INTERVAL 3 MONTH) AND CURDATE()) AND stock_exchange=? ORDER BY date", nativeQuery = true)
	List<StockPrice> getStockPricesByCompanyLastQuarter(long id,String s);

	@Query(value = "SELECT stockprice_id,company,stock_exchange,date,stock_price " + "FROM stock_price "
			+ "WHERE company=? ORDER BY date", nativeQuery = true)
	List<StockPrice> getStockPricesByCompany(long id);

}
