import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PageService } from '../../../services/page.service.client';
import { Page } from '../../../models/page.model.client';
import {WebsiteService} from '../../../services/website.service.client';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {

  userId: String;
  websiteId: String;
  newPage: any = {};

  constructor(
    private pageService: PageService,
    private activatedRoute: ActivatedRoute,
    private websiteService: WebsiteService,
    private router: Router,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    console.log('test if can tra')
    // this.activatedRoute.params.subscribe(
    //   (params: any) => {
    //     this.userId = params['uid'];
    //     this.websiteId = params['wid'];
    //   }
    // );
    this.activatedRoute.params.subscribe(
      params => {
        this.websiteService.findWebsiteById(params.wid).subscribe(
          (website: any) => {
            // if (website._user === params.uid) {
              this.websiteId = params.wid;
              // const user = this.sharedService.user;
              // this.userId = user._id;
            // } else {
            //   console.log('User ID does not match.');
            // }
          },
          (error: any) => {
            console.log(error);
          }
        );
      }
    );
  }

  createPage(new_page) {
    // if (new_page.name.trim() !== '' && new_page.title.trim() !== '') {
      // this.pageService.createPage(this.websiteId, page);
      // this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId + '/page']);
      this.pageService.createPage(this.websiteId, new_page).subscribe(
        (page: any) => {
          const url: any = '/user/website/' + this.websiteId + '/page';
          this.router.navigate([url]);
        }
      );
    }
  // }

}
