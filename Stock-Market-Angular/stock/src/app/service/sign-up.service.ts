import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../model/user_model';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  redirectUrl = '/';
  loggedIn: boolean = false;
  name: string;
  validCredentials: boolean = false;
  baseUrl = environment.baseUrl;
  private signUpUrl = this.baseUrl + '/users';
  private token: string;

  authCredentials = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('admin@admin.com:admin')
    })
  };



  constructor(public router: Router, private http: HttpClient) { }

 

  signUpUser(user: User) {

    return this.http.post(this.signUpUrl, user, this.authCredentials)

  }

 
}
