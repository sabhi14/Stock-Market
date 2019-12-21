package com.cognizant.stockmarket.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cognizant.stockmarket.model.Company;
import com.cognizant.stockmarket.model.Sectors;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Integer> {

	@Modifying
	@Transactional
	@Query(value = "UPDATE company SET boardof_directors =?, brief_write_up=?, ceo_name=?, company_name=?, is_company_blocked=?, listed_in_stock_exchanges=?, stock_code=?, turnover=?, sector=? WHERE company_id=?", nativeQuery = true)
	Integer updateCompany(String bod, String bwf, String ceo, String cn, boolean isb, boolean lise, String sc, long to,
			Sectors sectorId, long compId);
	
	@Query(value = "SELECT company_id,boardof_directors, brief_write_up, ceo_name, company_name, is_company_blocked, listed_in_stock_exchanges, turnover, sector,stock_code from company WHERE company_id=?", nativeQuery = true)
	Company getCompanyById(long id);
	
	@Modifying
	@Transactional
	@Query(value = "UPDATE company SET is_company_blocked=? WHERE company_id=?", nativeQuery = true)
	Integer toggleCompanyStatus(boolean b, long compId);
	
	@Query(value = "SELECT company_id,boardof_directors, brief_write_up, ceo_name, company_name, is_company_blocked, listed_in_stock_exchanges, turnover, sector,stock_code from company WHERE stock_code=?", nativeQuery = true)
	Company getCompanyByStockCode(String sc);
	
	@Query(value = "SELECT company_id,boardof_directors, brief_write_up, ceo_name, company_name, is_company_blocked, listed_in_stock_exchanges, turnover, sector,stock_code from company WHERE company_name=?", nativeQuery = true)
	Company getCompanyByName(String sc);
	
	@Query(value = "SELECT company_id,boardof_directors, brief_write_up, ceo_name, company_name, is_company_blocked, listed_in_stock_exchanges, turnover, sector,stock_code from company WHERE is_company_blocked=0", nativeQuery = true)
	List<Company> getUserCompanies();

}
