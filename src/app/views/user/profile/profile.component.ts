import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';

import { UserService } from '../../../services/user.service.client';
import { User } from '../../../models/user.model.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId: String;
  user: User;
  updateMsg: String;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.activatedRoute.params.subscribe(
    //   (params: any) => {this.userId = params['uid']; }
    // );
    //
    // this.user = this.userService.findUserById(this.userId);
    this.activatedRoute.params.subscribe(params => {
      this.userId = params.uid;
      return this.userService.findUserById(this.userId).subscribe(
        (user: User) => {
          this.user = user;
          console.log(this.user);
        },
      );
    });
  }

  updateUser(changed_user) {
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
    this.userService.updateUser(this.userId, changed_user).subscribe(
      (user: User) => {
        this.user = user;
      },
    );
  }
}
