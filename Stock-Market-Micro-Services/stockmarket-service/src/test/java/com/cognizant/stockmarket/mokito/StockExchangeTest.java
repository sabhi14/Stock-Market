package com.cognizant.stockmarket.mokito;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.util.Arrays;
import java.util.List;

import org.aspectj.lang.annotation.Before;
import org.junit.jupiter.api.Test;

import com.cognizant.stockmarket.controller.StockExchangeController;
import com.cognizant.stockmarket.model.Sectors;
import com.cognizant.stockmarket.model.StockExchange;

public class StockExchangeTest {

	StockExchangeController stockexController;
	StockExchange se1 = null;
	StockExchange se2 = null;
	StockExchange se3 = null;

	@Before(value = "")
	public void setUp() throws Exception {
		Sectors s1 = new Sectors(1l, "BFS", "IT");

		stockexController = mock(StockExchangeController.class);
		se1 = new StockExchange(255, "Bfs", "abcd", "Viman nagar", "Good");
		se2 = new StockExchange(256, "Bfs", "abcd", "Sopan nagar", "Good");
		se3 = new StockExchange(257, "Bfs", "abcd", "Dhanore nagar", "Good");

		when(stockexController.getAStockExchange()).thenReturn(Arrays.asList(se1, se2));
		when(stockexController.getStockExchange(255)).thenReturn(se1);
		when(stockexController.addNewStockExchange(se3)).thenReturn(Arrays.asList(se1, se2, se3));

	}

	@Test
	public final void getStockExchange() {
		StockExchange stockex = stockexController.getStockExchange(255);
		assertEquals(255, stockex.getStockExchangeId());

	}

	@Test
	public final void getaddStockExchangeTest() {

		List<StockExchange> companies = stockexController.addNewStockExchange(se3);
		assertEquals(3, companies.size());
	}

	@Test
	public final void testGetAllStockExchangeTest() {
		List<StockExchange> stockex = stockexController.getAStockExchange();
		assertEquals(2, stockex.size());

	}

}
