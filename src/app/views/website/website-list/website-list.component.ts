import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { WebsiteService } from '../../../services/website.service.client';
import { Website} from '../../../models/website.model.client';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {

  userId: String;
  websites: any[];
  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute, private sharedService: SharedService) { }

  ngOnInit() {
    // this.activatedRoute.params.subscribe(
    //   (params: any) => {
    //     this.userId = params['uid'];
    //   }
    // );
    //
    // this.websites = this.websiteService.findWebsitesByUser(this.userId);
    this.activatedRoute.params.subscribe(
      (params: any) => {
        const user = this.sharedService.user;
        this.userId = user['_id'];
        return this.websiteService.findAllWebsitesByUser(this.userId).subscribe(
          (websites: any[]) => {
            this.websites = websites;
          }
        );
      }
    );
    console.log(this.websites);
  }
}
