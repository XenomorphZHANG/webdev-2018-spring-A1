import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { WebsiteService } from '../../../services/website.service.client';
import { Website } from '../../../models/website.model.client';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {

  developerId: String;
  newWebsite: Website = { _id: '', name: '', developerId: '', description: '' };
  websites: Website[] = [];

  constructor(private websiteService: WebsiteService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (developerId: any) => {
        this.developerId = developerId['uid'];
      }
    );

    this.websites = this.websiteService.findWebsitesByUser(this.developerId);
    console.log(this.websites);
  }

  createWebsite(newWebsite) {
    if (newWebsite.name.trim() !== '') {
      newWebsite.developerId = this.developerId;
      this.websiteService.createWebsite(this.developerId, newWebsite);
      this.websites.push(newWebsite);
      this.router.navigate(['/user/' + this.developerId + '/website']);
    }
  }
}
