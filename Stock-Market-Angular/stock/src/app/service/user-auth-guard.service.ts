import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuardService {

  constructor(private router:Router) { }

  canActivateChild() {
    if(localStorage.getItem('role') === 'ROLE_USER') {
      return true;
    }
   this.router.navigate(['login'])
  }

  canActivate() {
    if(localStorage.length>0) {
      return true;
    }
   this.router.navigate(['login'])
  }
}
