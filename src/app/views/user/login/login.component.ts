import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../../../services/user.service.client';
import { User } from '../../../models/user.model.client';

import { SharedService } from '../../../services/shared.service';
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;

  username: string;
  password: string;
  errorFlag: boolean;
  errorMsg = 'Invalid username or password!';
  baseUrl = environment.baseUrl;

  constructor(private userService: UserService, private router: Router, private sharedService: SharedService) { }
  login() {
    // this.username = this.loginForm.value.username;
    // this.password = this.loginForm.value.password;
    //
    // const user: User = this.userService.findUserByCredential(this.username, this.password);
    // if (user) {
    //   this.router.navigate(['/user', user._id]);
    // } else {
    //   this.errorFlag = true;
    // }

    // this.userService.findUserByCredential(this.username, this.password)
    //   .subscribe((user: User) => {
    //     if (user) {
    //       console.log(user);
    //       this.router.navigate(['/user', user._id ]);
    //     } else {
    //           this.errorFlag = true;
    //     }
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;
    this.errorFlag = false;

    this.userService.login(this.username, this.password)
      .subscribe(
        (user: any) => {
          this.sharedService.user = user;
          this.errorFlag = false;
          this.router.navigate(['/profile']);
        },
        (error: any) => {
          console.log(error);
          this.errorFlag = true;
        }
      );
  }

  register() {
    this.router.navigate(['/register']);
  }

  ngOnInit() {
    this.username = null;
    this.password = null;
  }
}
