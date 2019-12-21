/**
 * 
 */
package com.cognizant.stockmarket.model;

import java.io.Serializable;
import java.util.Date;

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
@Table(name = "StockPrice")
public class StockPrice implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = -2630135355292560952L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int stockpriceId;

	private String company;
	private String stockExchange;

	private double stockPrice;

	private Date date;


	public StockPrice() {
		super();
	}


	public StockPrice(int stockpriceId, String company, String stockExchange, double stockPrice, Date date) {
		super();
		this.stockpriceId = stockpriceId;
		this.company = company;
		this.stockExchange = stockExchange;
		this.stockPrice = stockPrice;
		this.date = date;
	}


	public int getStockpriceId() {
		return stockpriceId;
	}


	public void setStockpriceId(int stockpriceId) {
		this.stockpriceId = stockpriceId;
	}


	public String getCompany() {
		return company;
	}


	public void setCompany(String company) {
		this.company = company;
	}


	public String getStockExchange() {
		return stockExchange;
	}


	public void setStockExchange(String stockExchange) {
		this.stockExchange = stockExchange;
	}


	public double getStockPrice() {
		return stockPrice;
	}


	public void setStockPrice(double stockPrice) {
		this.stockPrice = stockPrice;
	}


	public Date getDate() {
		return date;
	}


	public void setDate(Date date) {
		this.date = date;
	}


	public static long getSerialversionuid() {
		return serialVersionUID;
	}


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((company == null) ? 0 : company.hashCode());
		result = prime * result + ((date == null) ? 0 : date.hashCode());
		result = prime * result + ((stockExchange == null) ? 0 : stockExchange.hashCode());
		long temp;
		temp = Double.doubleToLongBits(stockPrice);
		result = prime * result + (int) (temp ^ (temp >>> 32));
		result = prime * result + stockpriceId;
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
		StockPrice other = (StockPrice) obj;
		if (company == null) {
			if (other.company != null)
				return false;
		} else if (!company.equals(other.company))
			return false;
		if (date == null) {
			if (other.date != null)
				return false;
		} else if (!date.equals(other.date))
			return false;
		if (stockExchange == null) {
			if (other.stockExchange != null)
				return false;
		} else if (!stockExchange.equals(other.stockExchange))
			return false;
		if (Double.doubleToLongBits(stockPrice) != Double.doubleToLongBits(other.stockPrice))
			return false;
		if (stockpriceId != other.stockpriceId)
			return false;
		return true;
	}


	@Override
	public String toString() {
		return "StockPrice [stockpriceId=" + stockpriceId + ", company=" + company + ", stockExchange=" + stockExchange
				+ ", stockPrice=" + stockPrice + ", date=" + date + "]";
	}



	
}
