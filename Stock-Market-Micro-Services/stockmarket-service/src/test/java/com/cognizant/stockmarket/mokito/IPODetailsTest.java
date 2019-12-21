package com.cognizant.stockmarket.mokito;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.util.Arrays;
import java.util.List;

import org.aspectj.lang.annotation.Before;
import org.junit.jupiter.api.Test;

import com.cognizant.stockmarket.controller.IPOController;
import com.cognizant.stockmarket.model.Company;
import com.cognizant.stockmarket.model.IPODetails;
import com.cognizant.stockmarket.model.Sectors;
import com.cognizant.stockmarket.model.StockExchange;

public class IPODetailsTest {

	IPODetails ipo1 = null;
	IPODetails ipo2 = null;
	IPODetails ipo3 = null;
	IPOController ipoController;

	@Before(value = "")
	public final void setUp() throws Exception {

		ipoController = mock(IPOController.class);
		Sectors s1 = new Sectors(1l, "BFS", "IT");
		Sectors s2 = new Sectors(2l, "BS", "IT1");
		Company c1 = new Company(255, "Cognizant", 22000, "Brian", "ABC", true, s1, "abcd", "1234", false);
		Company c2 = new Company(255, "Cogni", 21000, "Brian", "ABC", true, s2, "abcd", "1234", false);
		StockExchange se1 = new StockExchange(1, "BSE", "Bombay Stock EXchange", "Mumbai", "Good");
		StockExchange se2 = new StockExchange(2, "NSE", "National Stock EXchange", "Mumbai", "Good");

		ipo1 = new IPODetails(1, c1, se1, 200, 15000, "GOOD");
		ipo2 = new IPODetails(2, c2, se2, 300, 16000, "V. GOOD");
		ipo3 = new IPODetails(3, c2, se2, 400, 16000, "V. GOOD");

		when(ipoController.addNewIPO(ipo3)).thenReturn(Arrays.asList(ipo1, ipo2, ipo3));
		when(ipoController.getIPOs()).thenReturn(Arrays.asList(ipo1, ipo2));
		when(ipoController.getIPODetailsById(2)).thenReturn(ipo2);
	}

	@Test
	public final void testAddIPO() {
		List<IPODetails> ipo = ipoController.addNewIPO(ipo3);
		assertEquals(3, ipo.size());
	}

	@Test
	public final void testGetIPO() {
		List<IPODetails> ipo = ipoController.getIPOs();
		assertEquals(2, ipo.size());

	}

	@Test
	public final void testGetIPOById() {
		IPODetails ipo = ipoController.getIPODetailsById(2);
		assertEquals(16000, ipo.getNumberofShares());
	}

}