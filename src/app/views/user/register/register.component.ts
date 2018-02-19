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

  user: User = {_id: '', username: '', password: '', firstName: '', lastName: '', emailAddress: ''};
  username: String;
  password: String;
  verifyPassword: String;
  firstName: String;
  lastName: String;
  emailAddress: String;
  errorFlag: boolean;
  errorMsg: String;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() { }

  register() {
    this.errorFlag = false;
    this.username = this.registerForm.value.username;
    this.password = this.registerForm.value.password;
    this.verifyPassword = this.registerForm.value.verifyPassword;
    this.firstName = this.registerForm.value.firstName;
    this.lastName = this.registerForm.value.lastName;

    if (this.userService.findUserByUsername(this.username) != null) {
      this.errorMsg = 'This user is already exist, please change another username.';
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
      this.user.emailAddress = this.emailAddress;
      this.userService.createUser(this.user);
      this.router.navigate(['/user', this.userService.findUserByUsername(this.username)._id]);
    }
  }
}
