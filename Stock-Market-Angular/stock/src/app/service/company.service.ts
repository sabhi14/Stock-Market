import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Company } from '../model/company_model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  redirectUrl = '/';
  loggedIn: boolean = false;
  name: string;
  validCredentials: boolean = false;
  baseUrl = environment.baseUrl;
  private companyUrl = this.baseUrl + '/company';
  private toggleCompanyStatusUrl = this.baseUrl + '/company/status/';


  authCredentials = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
  };

  constructor(public router: Router, private http: HttpClient) { }

  getAllCompanyUrl() {
    return this.http.get(this.companyUrl, this.authCredentials);
    
  }

  addCompany(company) {

    return this.http.post(this.companyUrl, company, this.authCredentials)
  }

  updateCompany(company: Company) {

    return this.http.put(this.companyUrl, company, this.authCredentials)
  }

  getCompany(id) {
    return this.http.get(this.companyUrl+"/id/" + id, this.authCredentials);
  }

  getCompanyByStockCode(id) {
    return this.http.get(this.companyUrl+"/" + id, this.authCredentials);
  }

  toggleCompany(id){
    return this.http.get(this.toggleCompanyStatusUrl + id, this.authCredentials);
  }




  

}
