// import { Component, OnInit, ViewChild } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { Router } from '@angular/router';
//
// import { UserService } from '../../../services/user.service.client';
// import { User } from '../../../models/user.model.client';
// import { SharedService } from '../../../services/shared.service';
//
// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent implements OnInit {
//
//   @ViewChild('f') registerForm: NgForm;
//
//   user: any = {};
//   username: String;
//   password: String;
//   verifyPassword: String;
//   firstName: String;
//   lastName: String;
//   email: String;
//   errorFlag: boolean;
//   errorMsg: String;
//
//   constructor(private userService: UserService, private router: Router, private sharedService: SharedService) { }
//
//   ngOnInit() { }
//
//   register() {
//     this.errorFlag = false;
//     this.username = this.registerForm.value.username;
//     this.password = this.registerForm.value.password;
//     this.verifyPassword = this.registerForm.value.verifyPassword;
//     this.firstName = this.registerForm.value.firstName;
//     this.lastName = this.registerForm.value.lastName;
//
//     // if (this.userService.findUserByUsername(this.username) != null) {
//     //   this.errorMsg = 'This user is already exist, please change another username.';
//     //   this.errorFlag = true;
//     // }
//     // if (this.username.trim() === '') {
//     //    this.errorMsg = 'Username cannot be empty';
//     //    this.errorFlag = true;
//     // }
//     // if (this.password.trim() === '') {
//     //    this.errorMsg = 'Password cannot be empty';
//     //    this.errorFlag = true;
//     // }
//     // if (this.password !== this.verifyPassword) {
//     //   this.errorMsg = 'Please type in the same password!';
//     //   this.errorFlag = true;
//     // }
//     if (!this.errorFlag) {
//       this.user.username = this.username;
//       this.user.password = this.password;
//       this.user.firstName = this.firstName;
//       this.user.lastName = this.lastName;
//       this.user.email = this.email;
//       // this.userService.createUser(this.user);
//       this.userService.register(this.username, this.password).subscribe(
//         (data: any) => {
//           this.errorFlag = false;
//           console.log(this.user);
//           this.sharedService.user = data;
//           this.router.navigate(['/profile']);
//         },
//         (error: any) => {
//           this.errorFlag = true;
//           this.errorMsg = error;
//         }
//       );
//       // this.router.navigate(['/user', this.userService.findUserByUsername(this.username)._id]);
//     }
//   }
// }


import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') registerForm: NgForm;
  error: string;
  user: User;

  constructor(private userService: UserService, private router: Router, private sharedService: SharedService) {}

  register() {
    const username = this.registerForm.value.username;
    const password = this.registerForm.value.password;
    const verify = this.registerForm.value.verify;

    if (password === verify) {
      this.user = new User('', username, password, '', '', '');
      this.userService.register(username, password).subscribe(
        (user) => {
          // alert(this.user.username + ' has been created!');
          this.sharedService.user = user;
          this.router.navigate(['/profile']);
        },
        (error: any) => {
          console.log(error);
          this.error = error._body;
        }
      );
    } else {
      this.error = 'Password mis-matching!';
    }
  }

  ngOnInit() {
  }

}
