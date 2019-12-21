
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";

import { Router } from '@angular/router';
import { SignUpService } from 'src/app/service/sign-up.service';
import { User } from 'src/app/model/user_model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  userId = 0;
  userName = "";
  password = "";
  confirmPassword ="";
  email = "";
  mobileNo = 0;
  confirmed = false;

  submitted = false;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  signUpForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router,private signUpService: SignUpService) {}

  ngOnInit() {
    this.signUpForm = this.formBuilder.group(
      {
        username: new FormControl(this.userName, [
          Validators.required,
          Validators.minLength(4)
        ]),
       
        password: new FormControl(this.password, [
          Validators.required,
          Validators.minLength(4)
        ]),
        confirmPassword: new FormControl(this.confirmPassword, [
          Validators.required,
          Validators.minLength(4)
        ]),
        emailId: new FormControl(this.email, [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(50),
          Validators.pattern(this.emailPattern)
        ]),
        contactNumber: new FormControl(this.mobileNo, [
          Validators.required,
          Validators.minLength(4)
        ]),
      },
      {
        validator: this.mustMatch("password", "confirmPassword")
      }
    );
  }

  get f() { return this.signUpForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.signUpForm.invalid) {
      return;
    }

    console.log(this.signUpForm.value);

    const user: User = {
      userName: this.signUpForm.value['username'],
      email: this.signUpForm.value['emailId'],
      password: this.signUpForm.value['password'],
      mobile: this.signUpForm.value['contactNumber'],
      confirmed: false,
    };

    console.log('User :' + user);


    this.signUpService.signUpUser(user).subscribe(()=>
    alert("SignUp Success")
    )
  }


  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
}
