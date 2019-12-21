import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  gender = ''
  username = ''

  isAdmin: boolean;


  constructor(private router: Router, private loginService: LoginService) { }



  ngOnInit() {
    this.isAdmin = false;

    
    this.username = localStorage.getItem('username')
  }

  
  logout() {
    this.loginService.logout();
  }


  /*
  goToDashboard() {
    if (this.loginService.loggedInRole === 'ROLE_ADMIN') {
      this.router.navigateByUrl('/admin/home')
    }
    if (this.loginService.loggedInRole === 'ROLE_DOCTOR') {
      this.router.navigateByUrl('/doctor/home')
    }
    if (this.loginService.loggedInRole === 'ROLE_PATIENT') {
      this.router.navigateByUrl('/patient/home')
    }
    if (this.loginService.loggedInRole === 'ROLE_AGENT') {
      this.router.navigateByUrl('/agent/home')
    }
  }*/
}
