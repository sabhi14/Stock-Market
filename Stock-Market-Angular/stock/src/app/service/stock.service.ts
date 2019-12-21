import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { StockPrice } from '../model/stock_price_model';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  redirectUrl = '/';
  loggedIn: boolean = false;
  name: string;
  validCredentials: boolean = false;
  baseUrl = environment.baseUrl;
  private stockPriceAddUrl = this.baseUrl + '/stockprice';


  authCredentials = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
  };

  constructor(public router: Router, private http: HttpClient) { }

  addStockPrices(stockprices: StockPrice[]) {
    return this.http.post(this.stockPriceAddUrl, stockprices, this.authCredentials);

  }

  getStockPriceLastWeek(compId, stockName) {
    return this.http.get(this.stockPriceAddUrl + '/week/' + compId + '/' + stockName, this.authCredentials);

  }

  getStockPriceLastMonth(compId, stockName) {
    return this.http.get(this.stockPriceAddUrl + '/month/' + compId + '/' + stockName, this.authCredentials);

  }

  getStockPriceLastQuarter(compId, stockName) {
    return this.http.get(this.stockPriceAddUrl + '/quarter/' + compId + '/' + stockName, this.authCredentials);

  }
}
