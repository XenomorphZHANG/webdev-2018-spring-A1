import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { WebsiteService } from '../../../services/website.service.client';
import { Website } from '../../../models/website.model.client';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {

  userId: string;
  newWebsite: any = {};
  websites: any[];

  constructor(private websiteService: WebsiteService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private sharedService: SharedService) { }

  ngOnInit() {
    // this.activatedRoute.params.subscribe(
    //   (developerId: any) => {
    //     this.developerId = developerId['uid'];
    //   }
    // );
    //
    // this.websites = this.websiteService.findWebsitesByUser(this.developerId);
    this.activatedRoute.params.subscribe(
      (params: any) => {
        const user = this.sharedService.user;
        this.userId = user['_id'];
        // this.newWebsite = new Website('', '', this.userId, '');
        this.websiteService.findAllWebsitesByUser(this.userId).subscribe(
          (websites: any[]) => {
            this.websites = websites;
          }
        );
      }
    );
    console.log(this.websites);
  }

  createWebsite(newWebsite) {
    if (newWebsite.name !== null
      && newWebsite.description !== null
      && newWebsite.name.trim() !== ''
      && newWebsite.description.trim() !== '') {
      // newWebsite.developerId = this.developerId;
      // this.websiteService.createWebsite(this.developerId, newWebsite);
      // this.websites.push(newWebsite);
      // this.router.navigate(['/user/' + this.developerId + '/website']);
      this.websiteService.createWebsite(this.userId, newWebsite).subscribe(
        (website: any) => {
          const url: any = '/user/website';
          this.router.navigate([url]);
        },
      );
    }
  }
}
