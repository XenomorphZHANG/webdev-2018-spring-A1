import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../../services/user.service.client';
import { User } from '../../../models/user.model.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;

  username: String;
  password: String;
  errorFlag: boolean;
  errorMsg = 'Invalid username or password!';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() { }

  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    //
    // const user: User = this.userService.findUserByCredential(this.username, this.password);
    // if (user) {
    //   this.router.navigate(['/user', user._id]);
    // } else {
    //   this.errorFlag = true;
    // }

    this.userService.findUserByCredential(this.username, this.password)
      .subscribe((user: User) => {
        if (user) {
          console.log(user);
          this.router.navigate(['/user', user._id ]);
        } else {
              this.errorFlag = true;
        }
  });
}}
