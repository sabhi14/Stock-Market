import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user_model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  emailId: '';
  password: '';

  submitted = false;

  loginForm: FormGroup;
  // tslint:disable-next-line: max-line-length
  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginService, private userService: UserService) { }


  ngOnInit() {


    this.loginForm = this.formBuilder.group(

      {
        emailId: new FormControl(this.emailId, [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(50),
        ]),

        password: new FormControl(this.password, [
          Validators.required,
          Validators.minLength(4)
        ]),


      }

    )

  }

  get f() { return this.loginForm.controls; }

  onSubmit() {

    this.submitted = true;
    //   this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.loginService.authenticate(this.loginForm.value.emailId, this.loginForm.value.password)

      .subscribe((loginres) => {
        this.loginService.getUserId(this.loginForm.value.emailId).subscribe((userId: number) => {

          if (loginres.role === 'ROLE_ADMIN') {
            this.loginService.loggedInUserId = userId;

            this.loginService.loggedIn = true;

            localStorage.setItem('role', loginres.role)
            localStorage.setItem('token', loginres.token)
            localStorage.setItem('userId', userId.toString())


            this.loginService.loggedInRole = loginres.role;
            this.userService.getUser(+localStorage.getItem('userId')).subscribe((user: User) => {

              localStorage.setItem('username', user.userName)
              this.loginService.loggedInUserName = user.userName;
              console.log(this.loginService.loggedInUserName);
              this.router.navigateByUrl('/admin/importdata');

            });
          } else {



            this.userService.getUser(userId).subscribe((res: User) => {

              if (res.confirmed == true) {
                this.loginService.loggedInUserId = userId;
                this.loginService.loggedInRole = loginres.role;
                this.loginService.loggedIn = true;
                localStorage.setItem('role', loginres.role)
                localStorage.setItem('token', loginres.token)
                localStorage.setItem('userId', userId.toString())
                localStorage.setItem('username', res.userName)
                this.loginService.loggedInUserName = res.userName;
                console.log(this.loginService.loggedInUserName);
                this.router.navigateByUrl('/user/view-companies');
              } else {
                alert('Please confirm your email ID through link sent to your mail ID.')
              }


            });
          }
        });

      }, (res) => { console.log('Error!' + res); alert('Invalid Username or Password.') })
  }

}
