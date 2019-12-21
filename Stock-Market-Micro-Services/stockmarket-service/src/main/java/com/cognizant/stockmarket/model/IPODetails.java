/**
 * 
 */
package com.cognizant.stockmarket.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 * @author Admin
 *
 */
@Entity
@Table(name = "IPODetails")
public class IPODetails implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = -3900068091412784952L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long ipoId;
	@ManyToOne
	@JoinColumn(name = "company_name", referencedColumnName = "company_id")
	private Company company;
	@ManyToOne
	@JoinColumn(name = "stock_exchange", referencedColumnName = "stock_exchange_id")
	private StockExchange stockExchange;

	private double pricePerShare;
	private int numberofShares;
	private String remark;

	public IPODetails() {
		super();
	}

	public IPODetails(long ipoId, Company company, StockExchange stockExchange, double pricePerShare,
			int numberofShares, String remark) {
		super();
		this.ipoId = ipoId;
		this.company = company;
		this.stockExchange = stockExchange;
		this.pricePerShare = pricePerShare;
		this.numberofShares = numberofShares;
		this.remark = remark;
	}

	public long getIpoId() {
		return ipoId;
	}

	public void setIpoId(long ipoId) {
		this.ipoId = ipoId;
	}

	public Company getCompany() {
		return company;
	}

	public void setCompany(Company company) {
		this.company = company;
	}

	public StockExchange getStockExchange() {
		return stockExchange;
	}

	public void setStockExchange(StockExchange stockExchange) {
		this.stockExchange = stockExchange;
	}

	public double getPricePerShare() {
		return pricePerShare;
	}

	public void setPricePerShare(double pricePerShare) {
		this.pricePerShare = pricePerShare;
	}

	public int getNumberofShares() {
		return numberofShares;
	}

	public void setNumberofShares(int numberofShares) {
		this.numberofShares = numberofShares;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((company == null) ? 0 : company.hashCode());
		result = prime * result + (int) (ipoId ^ (ipoId >>> 32));
		result = prime * result + numberofShares;
		long temp;
		temp = Double.doubleToLongBits(pricePerShare);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		result = prime * result + ((remark == null) ? 0 : remark.hashCode());
		result = prime * result + ((stockExchange == null) ? 0 : stockExchange.hashCode());
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
		IPODetails other = (IPODetails) obj;
		if (company == null) {
			if (other.company != null)
				return false;
		} else if (!company.equals(other.company))
			return false;
		if (ipoId != other.ipoId)
			return false;
		if (numberofShares != other.numberofShares)
			return false;
		if (Double.doubleToLongBits(pricePerShare) != Double.doubleToLongBits(other.pricePerShare))
			return false;
		if (remark == null) {
			if (other.remark != null)
				return false;
		} else if (!remark.equals(other.remark))
			return false;
		if (stockExchange == null) {
			if (other.stockExchange != null)
				return false;
		} else if (!stockExchange.equals(other.stockExchange))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "IPODetails [ipoId=" + ipoId + ", company=" + company + ", stockExchange=" + stockExchange
				+ ", pricePerShare=" + pricePerShare + ", numberofShares=" + numberofShares + ", remark=" + remark
				+ "]";
	}

}
