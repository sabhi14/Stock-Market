import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  redirectUrl = '/';
  loggedIn: boolean = false;
  name: string;
  validCredentials: boolean = false;

  loggedInUserId = 0;
  loggedInUserName = "";
  loggedInGender = "";
  loggedInRole = "";
  loggedInToken ="";

  authCredentials = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + btoa('admin@admin.com:admin')
    })
  };



  constructor(public router: Router, private http: HttpClient) { }

  baseUrl = environment.baseUrl;
  private authenticationApiUrl = this.baseUrl + '/authenticate';
  getUserIdUrl = this.baseUrl + '/users/name/';

  private token: string;


  authenticate(user: string, password: string): Observable<any> {
    let credentials = btoa(user + ':' + password);
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Basic ' + credentials);
    return this.http.get(this.authenticationApiUrl, { headers })
  }

  logout() {
    this.loggedIn = false;
    this.loggedInUserId = 0;
    this.loggedInUserName = "";
    this.loggedInGender = "";
    this.loggedInRole ="";
    this.loggedInToken ="";
    localStorage.clear()
    this.router.navigateByUrl('/login');
  }

  getUserId(username) {
    return this.http.get(this.getUserIdUrl + username, this.authCredentials);
  }
}
