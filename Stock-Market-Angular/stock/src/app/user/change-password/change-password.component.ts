import { Component, OnInit } from '@angular/core';
import {
  FormGroup,FormBuilder,FormControl,Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user_model';



@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private userService:UserService) { }
  usName = "";
  email = "";
  mobileNo = 0;
  password="";
  submitted = false;
  confirmed=true;
  oldPassword = "";
  newPassword ="";
  confirmPassword = "";
  changePassword: FormGroup;
  
  ngOnInit() {
    this.changePassword = this.formBuilder.group(
      {
        oldPassword: new FormControl(this.oldPassword, [
          Validators.required,
          Validators.minLength(4)
        ]),        
       
        newPassword: new FormControl(this.newPassword, [
          Validators.required,
          Validators.minLength(4)
        ]),
        confirmPassword: new FormControl(this.confirmPassword, [
          Validators.required,
          Validators.minLength(4)
        ]),

  },{
    validators: this.mustMatch('newPassword','confirmPassword')
  }
  
);


  }

  get f() {
    return this.changePassword.controls;
  }
  
  onSubmit() {

    //GET ID 
    
    this.submitted = true;
      if (this.changePassword.invalid) {
        return;
      }
  
      console.log(this.changePassword.value);
  

      // Check old password
      this.userService.passwordCheck(this.changePassword.value["oldPassword"]).subscribe(res => {
        console.log(res);
        if(res){
          const user = {
            userId: localStorage.getItem('userId'),
            userName: localStorage.getItem('username'),
            password: this.changePassword.value["confirmPassword"],
          };
      
          
        this.userService.passwordChange(user).subscribe(() => {
          console.log("Update successful");
          alert('Information updated successfully!!!');
         
        }, (err) => console.log("Error!"));
        }
        else{
          alert('Enter correct old password');
        }
       
  
      })


      
  
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
