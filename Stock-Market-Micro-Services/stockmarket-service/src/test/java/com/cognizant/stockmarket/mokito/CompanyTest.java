package com.cognizant.stockmarket.mokito;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.util.Arrays;
import java.util.List;

import org.aspectj.lang.annotation.Before;
import org.junit.jupiter.api.Test;

import com.cognizant.stockmarket.controller.CompanyController;
import com.cognizant.stockmarket.model.Company;
import com.cognizant.stockmarket.model.Sectors;

public class CompanyTest {

	CompanyController companyController;
	Company c1 = null;
	Company c2 = null;
	Company c3 = null;

	@Before(value = "")
	public void setUp() throws Exception {
		Sectors s1 = new Sectors(1l, "BFS", "IT");

		companyController = mock(CompanyController.class);
		c1 = new Company(255, "Cognizant", 22000, "Brian", "abc", true, s1, "abcd", "1234", false);
		c2 = new Company(256, "Accenture", 20000, "Brian", "abc", false, s1, "czx", "1234", true);
		c3 = new Company(257, "Infosys", 18000, "Brian", "abc", false, s1, "czx", "1234", true);

		when(companyController.getACompany()).thenReturn(Arrays.asList(c1, c2));
		when(companyController.getCompanyById(255)).thenReturn(c1);
		when(companyController.addNewCompany(c3)).thenReturn(Arrays.asList(c1, c2, c3));

	}

	@Test
	public final void testGetAllCompanies() {
		List<Company> agents = companyController.getACompany();
		assertEquals(2, agents.size());

	}

	@Test
	public final void getCompany() {
		Company company = companyController.getCompanyById(255);
		assertEquals(255, company.getCompanyId());

	}

	@Test
	public final void getaddCompany() {

		List<Company> companies = companyController.addNewCompany(c3);
		assertEquals(3, companies.size());
	}

	@Test
	public void testUpdateCompany() throws Exception {
		List<Company> companies = companyController.getACompany();
		assertEquals(2, companies.size());

		Company c = new Company();
		c = companyController.getCompanyById(255);
		c.setCompanyName("Amdocs");
		assertEquals("Amdocs", c.getCompanyName());

	}
}
