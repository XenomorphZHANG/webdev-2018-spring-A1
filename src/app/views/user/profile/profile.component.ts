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
    this.activatedRoute.params.subscribe(
      (params: any) => {this.userId = params['uid']; }
    );

    this.user = this.userService.findUserById(this.userId);
  }

  updateUser(user) {
    this.userService.updateUser(user);
    this.user = user;
    this.updateMsg = 'Successfully updated!';
  }
}
