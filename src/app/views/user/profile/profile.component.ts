import { Component, OnInit } from '@angular/core';
import {RouterLink, ActivatedRoute, Router} from '@angular/router';

import { UserService } from '../../../services/user.service.client';
import { User } from '../../../models/user.model.client';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId: String;
  user: User;
  updateMsg: String;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private sharedService: SharedService,
              private route: Router) { }

  ngOnInit() {
    // this.activatedRoute.params.subscribe(
    //   (params: any) => {this.userId = params['uid']; }
    // );
    //
    // this.user = this.userService.findUserById(this.userId);
    // this.activatedRoute.params.subscribe(params => {
    //   this.userId = params.uid;
    //   return this.userService.findUserById(this.userId).subscribe(
    //     (user: User) => {
    //       this.user = user;
    //       console.log(this.user);
    //     },
    //   );
    // });
    this.user = this.sharedService.user;
    this.userId = this.user['_id'];
    return this.userService.findUserById(this.userId).subscribe(
      (user: User) => {
        this.user = user;
      }
    );
  }

  updateUser(changedUser) {
    // this.userService.updateUser(user);
    // this.user = user;
    // this.updateMsg = 'Successfully updated!';
    // this.activatedRoute.params.subscribe(params => {
    //   return this.userService.updateUser(changed_user).subscribe(
    //     (user: User) => {
    //       this.user = user;
    //     }
    //   );
    // });
    this.userService.updateUser(this.userId, changedUser).subscribe(
      (user: User) => {
        this.user = user;
      },
    );
  }

  logout() {
    this.userService.logout().subscribe(
      (data: any) => this.route.navigate(['/login'])
    );
  }

  deleteUser() {
    this.activatedRoute.params.subscribe(params => {
      return this.userService.deleteUser(this.userId).subscribe(
        (data: any) => {
          this.route.navigate(['/login']);
        }
      );
    });
  }
}
