import { Component } from '@angular/core';
import { LoginService } from './service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webapp';

  constructor(private loginservice: LoginService, private router: Router) {
    if (localStorage.length > 0) {
      this.loginservice.loggedIn = true;
      this.loginservice.loggedInUserId = +localStorage.getItem('userId');
      this.loginservice.loggedInUserName = localStorage.getItem('username');
      this.loginservice.loggedInToken = localStorage.getItem('token');
      this.loginservice.loggedInRole = localStorage.getItem('role');
      if (this.loginservice.loggedInRole === 'ROLE_ADMIN') {
        router.navigateByUrl('/admin/importdata')
      }
      else{
        router.navigateByUrl('/user/view-companies')
      }
    }
  }

}
