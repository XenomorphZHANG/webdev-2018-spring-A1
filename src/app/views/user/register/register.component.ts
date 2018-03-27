import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../../services/user.service.client';
import { User } from '../../../models/user.model.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('f') registerForm: NgForm;

  user: any = {};
  username: String;
  password: String;
  verifyPassword: String;
  firstName: String;
  lastName: String;
  email: String;
  errorFlag: boolean;
  errorMsg: String;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() { }

  register(username: String, password: String, verifyPassword: String) {
    this.errorFlag = false;
    // this.username = this.registerForm.value.username;
    // this.password = this.registerForm.value.password;
    // this.verifyPassword = this.registerForm.value.verifyPassword;
    // this.firstName = this.registerForm.value.firstName;
    // this.lastName = this.registerForm.value.lastName;

    // if (this.userService.findUserByUsername(this.username) != null) {
    //   this.errorMsg = 'This user is already exist, please change another username.';
    //   this.errorFlag = true;
    // }
    if (username.trim() === '') {
       this.errorMsg = 'Username cannot be empty';
       this.errorFlag = true;
    }
    if (password.trim() === '') {
       this.errorMsg = 'Password cannot be empty';
       this.errorFlag = true;
    }
    if (this.password !== this.verifyPassword) {
      this.errorMsg = 'Please type in the same password!';
      this.errorFlag = true;
    }
    if (!this.errorFlag) {
      this.user.username = this.username;
      this.user.password = this.password;
      this.user.firstName = this.firstName;
      this.user.lastName = this.lastName;
      this.user.email = this.email;
      // this.userService.createUser(this.user);
      this.userService.createUser(this.user).subscribe(
        (user: User) => {
          this.errorFlag = false;
          console.log(this.user);
          this.router.navigate(['/user', user._id]);
        },
        (error: any) => {
          this.errorFlag = true;
          this.errorMsg = error;
        }
      );
      // this.router.navigate(['/user', this.userService.findUserByUsername(this.username)._id]);
    }
  }
}
