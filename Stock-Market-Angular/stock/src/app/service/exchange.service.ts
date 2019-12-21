import { StockExchange } from '../model/stock_exchange_model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Company } from '../model/company_model';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
  redirectUrl = '/';
  loggedIn: boolean = false;
  name: string;
  validCredentials: boolean = false;
  baseUrl = environment.baseUrl;
  private exchangeUrl = this.baseUrl + '/stock';
  

  authCredentials = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
  };

  constructor(public router: Router, private http: HttpClient) { }

  getAllExchangeUrl() {
    return this.http.get(this.exchangeUrl, this.authCredentials);
  }

  addExchange(exchange: StockExchange) {

    return this.http.post(this.exchangeUrl, exchange, this.authCredentials)
  }

  getExchangeByName(id) {

    return this.http.get(this.exchangeUrl + "/name/" +id, this.authCredentials)
  }
 

}
