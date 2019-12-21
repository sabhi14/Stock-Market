package com.cognizant.stockmarket.mokito;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import org.aspectj.lang.annotation.Before;
import org.junit.jupiter.api.Test;

import com.cognizant.stockmarket.controller.SectorController;
import com.cognizant.stockmarket.model.Sectors;

public class SectorTest {

	SectorController sectorController;
	Sectors s1 = null;
	Sectors s2 = null;
	Sectors s3 = null;

	@Before(value = "")
	public void setUp() throws Exception {

		sectorController = mock(SectorController.class);
		s1 = new Sectors(1, "BFS", "IT");

		when(sectorController.getSector(1)).thenReturn(s1);

	}

	@Test
	public final void getSectorTest() {
		Sectors sector = sectorController.getSector(1);
		assertEquals(1, sector.getSectorId());

	}

}
