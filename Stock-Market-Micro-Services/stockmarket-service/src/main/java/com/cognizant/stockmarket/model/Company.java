/**
 * 
 */
package com.cognizant.stockmarket.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "company")
public class Company {
	
	@Id
	@Column(name="company_id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long companyId;
	private String companyName;
	private long turnover;
	private String ceoName;
	private String boardofDirectors;
	private Boolean listedInStockExchanges;
	@ManyToOne
	@JoinColumn(name="sector", referencedColumnName="sector_id")
	private Sectors sector;
	private String briefWriteUp;
	private String stockCode;
	private boolean isCompanyBlocked;

	public Company() {
		super();
	}

	public Company(long companyId, String companyName, long turnover, String ceoName, String boardofDirectors,
			Boolean listedInStockExchanges, Sectors sector, String briefWriteUp, String stockCode,
			boolean isCompanyBlocked) {
		super();
		this.companyId = companyId;
		this.companyName = companyName;
		this.turnover = turnover;
		this.ceoName = ceoName;
		this.boardofDirectors = boardofDirectors;
		this.listedInStockExchanges = listedInStockExchanges;
		this.sector = sector;
		this.briefWriteUp = briefWriteUp;
		this.stockCode = stockCode;
		this.isCompanyBlocked = isCompanyBlocked;
	}

	public long getCompanyId() {
		return companyId;
	}

	public void setCompanyId(long companyId) {
		this.companyId = companyId;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public long getTurnover() {
		return turnover;
	}

	public void setTurnover(long turnover) {
		this.turnover = turnover;
	}

	public String getCeoName() {
		return ceoName;
	}

	public void setCeoName(String ceoName) {
		this.ceoName = ceoName;
	}

	public String getBoardofDirectors() {
		return boardofDirectors;
	}

	public void setBoardofDirectors(String boardofDirectors) {
		this.boardofDirectors = boardofDirectors;
	}

	public Boolean getListedInStockExchanges() {
		return listedInStockExchanges;
	}

	public void setListedInStockExchanges(Boolean listedInStockExchanges) {
		this.listedInStockExchanges = listedInStockExchanges;
	}

	public Sectors getSector() {
		return sector;
	}

	public void setSector(Sectors sector) {
		this.sector = sector;
	}

	public String getBriefWriteUp() {
		return briefWriteUp;
	}

	public void setBriefWriteUp(String briefWriteUp) {
		this.briefWriteUp = briefWriteUp;
	}

	public String getStockCode() {
		return stockCode;
	}

	public void setStockCode(String stockCode) {
		this.stockCode = stockCode;
	}

	public boolean isCompanyBlocked() {
		return isCompanyBlocked;
	}

	public void setCompanyBlocked(boolean isCompanyBlocked) {
		this.isCompanyBlocked = isCompanyBlocked;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((boardofDirectors == null) ? 0 : boardofDirectors.hashCode());
		result = prime * result + ((briefWriteUp == null) ? 0 : briefWriteUp.hashCode());
		result = prime * result + ((ceoName == null) ? 0 : ceoName.hashCode());
		result = prime * result + (int) (companyId ^ (companyId >>> 32));
		result = prime * result + ((companyName == null) ? 0 : companyName.hashCode());
		result = prime * result + (isCompanyBlocked ? 1231 : 1237);
		result = prime * result + ((listedInStockExchanges == null) ? 0 : listedInStockExchanges.hashCode());
		result = prime * result + ((sector == null) ? 0 : sector.hashCode());
		result = prime * result + ((stockCode == null) ? 0 : stockCode.hashCode());
		result = prime * result + (int) (turnover ^ (turnover >>> 32));
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
		Company other = (Company) obj;
		if (boardofDirectors == null) {
			if (other.boardofDirectors != null)
				return false;
		} else if (!boardofDirectors.equals(other.boardofDirectors))
			return false;
		if (briefWriteUp == null) {
			if (other.briefWriteUp != null)
				return false;
		} else if (!briefWriteUp.equals(other.briefWriteUp))
			return false;
		if (ceoName == null) {
			if (other.ceoName != null)
				return false;
		} else if (!ceoName.equals(other.ceoName))
			return false;
		if (companyId != other.companyId)
			return false;
		if (companyName == null) {
			if (other.companyName != null)
				return false;
		} else if (!companyName.equals(other.companyName))
			return false;
		if (isCompanyBlocked != other.isCompanyBlocked)
			return false;
		if (listedInStockExchanges == null) {
			if (other.listedInStockExchanges != null)
				return false;
		} else if (!listedInStockExchanges.equals(other.listedInStockExchanges))
			return false;
		if (sector == null) {
			if (other.sector != null)
				return false;
		} else if (!sector.equals(other.sector))
			return false;
		if (stockCode == null) {
			if (other.stockCode != null)
				return false;
		} else if (!stockCode.equals(other.stockCode))
			return false;
		if (turnover != other.turnover)
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Company [companyId=" + companyId + ", companyName=" + companyName + ", turnover=" + turnover
				+ ", ceoName=" + ceoName + ", boardofDirectors=" + boardofDirectors + ", listedInStockExchanges="
				+ listedInStockExchanges + ", sector=" + sector + ", briefWriteUp=" + briefWriteUp + ", stockCode="
				+ stockCode + ", isCompanyBlocked=" + isCompanyBlocked + "]";
	}

	
	
}
