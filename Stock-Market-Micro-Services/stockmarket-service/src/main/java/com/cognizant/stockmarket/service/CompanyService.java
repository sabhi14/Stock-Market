package com.cognizant.stockmarket.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.cognizant.stockmarket.model.Company;
import com.cognizant.stockmarket.repository.CompanyRepository;

@Component
public class CompanyService {

	@Autowired
	private CompanyRepository compRepo;

	public void addCompany(Company company) {
		compRepo.save(company);
	}

	public void updateCompany(Company company) {
		System.out.println(company.getCompanyId());
		compRepo.updateCompany(company.getBoardofDirectors(), company.getBriefWriteUp(), company.getCeoName(),
				company.getCompanyName(), company.isCompanyBlocked(), company.getListedInStockExchanges(),
				company.getStockCode(), company.getTurnover(), company.getSector(), company.getCompanyId());
	}

	public void toggleCompanyStatus(long id) {
		Company comp = compRepo.getCompanyById(id);
		compRepo.toggleCompanyStatus(!comp.isCompanyBlocked(), id);
	}

	public Company getCompanyByStockCode(String stockCode) {
		return compRepo.getCompanyByStockCode(stockCode);
	}
	
	public Company getCompanyById(long id) {
		return compRepo.getCompanyById(id);
	}
	
	public List<Company> getCompanies() {
		return compRepo.findAll();
	}
	
	public List<Company> getUserCompanies(){
		return compRepo.getUserCompanies();
	}

}
