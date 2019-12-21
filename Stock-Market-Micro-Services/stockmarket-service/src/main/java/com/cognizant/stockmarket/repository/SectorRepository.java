package com.cognizant.stockmarket.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cognizant.stockmarket.model.Sectors;

@Repository
public interface SectorRepository extends JpaRepository<Sectors, Integer> {

	@Query(value = "SELECT sector_id, sector_name, brief FROM sectors WHERE sector_id=?",nativeQuery=true)
	Sectors findSectorById(long id);

}
