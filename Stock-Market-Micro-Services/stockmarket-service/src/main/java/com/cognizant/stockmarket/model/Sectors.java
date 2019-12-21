/**
 * 
 */
package com.cognizant.stockmarket.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @author Admin
 *
 */
@Entity
@Table(name = "sectors")
public class Sectors{

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="sector_id")
	private long sectorId;
	private String sectorName;
	private String brief;
	public Sectors() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Sectors(long sectorId, String sectorName, String brief) {
		super();
		this.sectorId = sectorId;
		this.sectorName = sectorName;
		this.brief = brief;
	}
	public long getSectorId() {
		return sectorId;
	}
	public void setSectorId(long sectorId) {
		this.sectorId = sectorId;
	}
	public String getSectorName() {
		return sectorName;
	}
	public void setSectorName(String sectorName) {
		this.sectorName = sectorName;
	}
	public String getBrief() {
		return brief;
	}
	public void setBrief(String brief) {
		this.brief = brief;
	}
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((brief == null) ? 0 : brief.hashCode());
		result = prime * result + (int) (sectorId ^ (sectorId >>> 32));
		result = prime * result + ((sectorName == null) ? 0 : sectorName.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Sectors other = (Sectors) obj;
		if (brief == null) {
			if (other.brief != null)
				return false;
		} else if (!brief.equals(other.brief))
			return false;
		if (sectorId != other.sectorId)
			return false;
		if (sectorName == null) {
			if (other.sectorName != null)
				return false;
		} else if (!sectorName.equals(other.sectorName))
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "Sectors [sectorId=" + sectorId + ", sectorName=" + sectorName + ", brief=" + brief + "]";
	}

	
	

	
}
