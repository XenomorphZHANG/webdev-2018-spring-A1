import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PageService } from '../../../services/page.service.client';
import { Page } from '../../../models/page.model.client';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {

  userId: String;
  websiteId: String;
  newPage: Page = {_id: '', name: '', websiteId: '', title: ''};

  constructor(
    private pageService: PageService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.userId = params['uid'];
        this.websiteId = params['wid'];
      }
    );
  }

  createPage(new_page) {
    if (new_page.name.trim() !== '' && new_page.title.trim() !== '') {
      // this.pageService.createPage(this.websiteId, page);
      // this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId + '/page']);
      this.pageService.createPage(this.websiteId, new_page).subscribe(
        (page: Page) => {
          const url: any = '/user/' + this.userId + '/website/' + this.websiteId + '/page';
          this.router.navigate([url]);
        }
      );
    }
  }

}
