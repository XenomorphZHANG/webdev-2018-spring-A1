import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PageService } from '../../../services/page.service.client';
import { Page } from '../../../models/page.model.client';
import {WebsiteService} from '../../../services/website.service.client';
import {Website} from '../../../models/website.model.client';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  userId: String;
  websiteId: String;
  pages: any = [];

  constructor(private pageService: PageService, private websiteService: WebsiteService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.activatedRoute.params.subscribe(
    //   (params: any) => {
    //     this.userId = params['uid'];
    //     this.websiteId = params['wid'];
    //   }
    // );
    //
    // this.pages = this.pageService.findAllPagesForWebsite(this.websiteId);

    this.activatedRoute.params.subscribe(
      params => {
        this.websiteService.findWebsiteById(params.wid).subscribe(
          (website: Website) => {
            if (website.developerId === params.uid) {
              this.websiteId = params.wid;
              this.userId = params.uid;
              this.pageService.findAllPagesForWebsite(this.websiteId).subscribe(
                (pages: Page[]) => {
                  this.pages = pages;
                },
                (error: any) => {
                  console.log(error);
                }
              );
            }
          },
        );
      }
    );
  }
}
