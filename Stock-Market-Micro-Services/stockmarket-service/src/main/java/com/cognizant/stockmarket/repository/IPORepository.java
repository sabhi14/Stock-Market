package com.cognizant.stockmarket.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cognizant.stockmarket.model.IPODetails;

@Repository
public interface IPORepository extends JpaRepository<IPODetails, Long> {



	
	
}
