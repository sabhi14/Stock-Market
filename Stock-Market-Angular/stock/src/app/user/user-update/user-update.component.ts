import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user_model';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {
  usName = "";
  email = "";
  mobileNo = 0;
  password="";
  submitted = false;
  confirmed=true;
  updateUser: FormGroup;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private formBuilder: FormBuilder, private router: Router, private userService:UserService){ }

  ngOnInit() {

    var userId = localStorage.getItem('userId');
    var currentUser;
    // get user data
    this.userService.getUser(userId).subscribe(res => {
      currentUser = res;
      console.log(currentUser)
      this.usName = currentUser['userName'];
      this.email = currentUser['email'];
      this.mobileNo = currentUser['mobile'];

      this.updateUser = this.formBuilder.group(
        {
           usName: new FormControl(this.usName, [
            Validators.required,
            Validators.minLength(4)
          ]),
          email: new FormControl(this.email, [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(50),
            Validators.pattern(this.emailPattern)
          ]),
          mobileNo: new FormControl(this.mobileNo, [
            Validators.required,
            Validators.minLength(10)
          ]),
  
    }
  );
    })

    
}

get f() {
  return this.updateUser.controls;
}

onSubmit() {
  
//GET ID

  this.submitted = true;
    if (this.updateUser.invalid) {
      return;
    }

    console.log(this.updateUser.value);

    const user = {
      userId: localStorage.getItem('userId'),
      userName: this.updateUser.value["usName"],
      email: this.updateUser.value["email"],
      mobile: this.updateUser.value["mobileNo"],
      confirmed:this.confirmed,
      password:this.password
     
    };

    //code for service
    this.userService.userUpdate(user).subscribe(() => {
      console.log("Update successful");
      alert('Information updated successfully!!!');
     
    }, (err) => console.log("Error!"));

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
