package com.cognizant.stockmarket.mokito;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.sql.Time;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import org.aspectj.lang.annotation.Before;
import org.junit.jupiter.api.Test;

import com.cognizant.stockmarket.controller.StockPriceController;
import com.cognizant.stockmarket.model.Sectors;
import com.cognizant.stockmarket.model.StockPrice;

public class StockPriceServiceTest {

	StockPriceController spc;
	StockPrice sp1 = null;
	StockPrice sp2 = null;

	@Before(value = "")
	public void setUp() throws Exception {
		Sectors s1 = new Sectors(1l, "BFS", "IT");

		Date date1 = new Date(2019, 07, 03);
		Time time1 = new Time(4, 5, 2);

		spc = mock(StockPriceController.class);
		sp1 = new StockPrice(255, "Cognizant", "22000", 2200.00, date1);
		sp2 = new StockPrice(255, "Cognizant", "22000", 2200.00, date1);

		when(spc.addNewStockPrice(sp2)).thenReturn(Arrays.asList(sp1, sp2));

	}

	@Test
	public final void addNewStockPriceTest() {

		List<StockPrice> sps = spc.addNewStockPrice(sp2);
		assertEquals(2, sps.size());
	}
}
