import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IpoDetails } from '../model/ipo_details_model';

@Injectable({
  providedIn: 'root'
})
export class IpoService {

 // token = this.authService.getToken(); //Get token from sessionStorage
 token = 'token_goes_here';
 baseUrl = environment.baseUrl;
 authCredentials = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};


 constructor(/*private authService: AuthService,*/ private http: HttpClient) { }

 getAllIPO(): Observable<IpoDetails[]> {
   return this.http.get<IpoDetails[]>(this.baseUrl+'/ipo', this.authCredentials);
 }

 getByIpoId(ipoId: string): Observable<IpoDetails> {
   return this.http.get<IpoDetails>(this.baseUrl+'/ipo/'+ipoId, this.authCredentials);
 }

 addIPODetails(ipoDetails: IpoDetails) {
   this.http.post<IpoDetails>(this.baseUrl+'/ipo',ipoDetails,this.authCredentials)
   .subscribe((res) => {
     console.log('Post done');
   }, error => {
     alert('Failed...!!!!!!');
   });
 }

 

}
