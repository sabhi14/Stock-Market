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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.cognizant.stockmarket.model.Company;
import com.cognizant.stockmarket.service.CompanyService;

@RestController
@RequestMapping("/company")
public class CompanyController {

	@Autowired
	private CompanyService companyService;

	@PostMapping()
	public void addCompany(@RequestBody Company company) {
		try {
			companyService.addCompany(company);
		} catch (Exception ex) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid company");
		}
	}

	@PutMapping()
	public void updateCompany(@RequestBody Company company) {
		try {
			companyService.updateCompany(company);
		} catch (Exception ex) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid company");
		}
	}

	@GetMapping(value = "/status/{id}")
	public void toggleCompanyStatus(@PathVariable long id) {
		try {
			companyService.toggleCompanyStatus(id);
		} catch (Exception ex) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid company");
		}
	}

	@GetMapping(value = "/{stockCode}")
	public Company getCompanyByStockCode(@PathVariable String stockCode) {
		try {
			return companyService.getCompanyByStockCode(stockCode);
		} catch (Exception ex) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid stock code");
		}
	}
	
	@GetMapping(value = "/id/{id}")
	public Company getCompanyById(@PathVariable long id) {
		try {
			return companyService.getCompanyById(id);
		} catch (Exception ex) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid stock code");
		}
	}
	
	@GetMapping()
	public List<Company> getCompanies() {
		try {
			return companyService.getCompanies();
		} catch (Exception ex) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid stock code");
		}
	}
	
	@GetMapping(value="/user")
	public List<Company> getUserCompanies() {
		try {
			return companyService.getUserCompanies();
		} catch (Exception ex) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Invalid stock code");
		}
	}
	
	public List<Company> getACompany() {
		return Collections.EMPTY_LIST;
	}

	public List<Company> addNewCompany(Company company) {
		return Collections.EMPTY_LIST;
	}
}
