import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router) { }

  canActivateChild() {
    if(localStorage.getItem('role') === 'ROLE_ADMIN') {
      return true;
    }
   this.router.navigate(['login'])
  }
}
