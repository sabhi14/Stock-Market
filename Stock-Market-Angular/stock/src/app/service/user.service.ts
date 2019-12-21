import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../model/user_model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.baseUrl;
  private getUserUrl = this.baseUrl + '/users/';
  private userUpdateUrl = this.baseUrl + '/users/update';


  authCredentials = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
  };

  constructor(public router: Router, private http: HttpClient) {}
  
  userUpdate(user) {
    return this.http.put(this.getUserUrl, user, this.authCredentials);
  }

  passwordCheck(data){
    return this.http.post(this.getUserUrl+'passwordCheck/' + localStorage.getItem('userId'),data, this.authCredentials)
  }
  passwordChange(user){
    return this.http.put(this.getUserUrl+'password', user, this.authCredentials);

  }

  
  getUser(id) {
    return this.http.get(this.getUserUrl + id, this.authCredentials);
  }

}

