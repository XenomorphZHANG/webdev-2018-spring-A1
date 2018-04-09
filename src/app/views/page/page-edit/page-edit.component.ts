import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PageService } from '../../../services/page.service.client';
import { Page } from '../../../models/page.model.client';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {

  // properties
  userId: String;
  pageId: String;
  updatedPage: any = {} ;
  name: String;
  websiteId: String;
  description: String;

  constructor(
    private pageService: PageService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        const user = this.sharedService.user;
        this.userId = user._id;
        this.pageId = params['pid'];
        this.websiteId = params['wid'];
        this.pageService.findPageById(this.pageId).subscribe(
          (page: any) => {
            this.updatedPage = page;
          }
        );
      }
    );
    // this.updatedPage = this.pageService.findPageById(this.pageId);
  }

  updatePage(u_page) {
    if (u_page.name.trim() !== '' && u_page.title.trim() !== '') {
      this.pageService.updatePage(this.pageId, u_page).subscribe(
        (page: any) => {
          this.updatedPage = page;
          const url: any = '/user/website/' + this.websiteId + '/page';
          this.router.navigate([url]);
        }
      );
    }
      // this.pageService.updatePage(page._id, page);
      // this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId + '/page']);
  }

  deletePage() {
    // this.pageService.deletePage(this.pageId);
    // this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId + '/page']);
    this.pageService.deletePage(this.pageId).subscribe(
      (page: any) => {
        const url = '/user/website/' + this.websiteId + '/page';
        this.router.navigate([url]);
      }
    );
  }
}
