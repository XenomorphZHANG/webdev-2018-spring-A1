import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WebsiteService } from '../../../services/website.service.client';
import { Website } from '../../../models/website.model.client';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {

  // properties
  websiteId: String;
  websites: any[] = [{ _id: '', name: '', developerId: '', description: '' }];
  updatedWebsite: Website;
  name: String;
  developerId: String;
  description: String;

  constructor(private websiteService: WebsiteService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.websiteService.findWebsiteById(params.wid).subscribe(
          (website: Website) => {
            this.websiteId = website._id;
            this.developerId = website.developerId;
            this.updatedWebsite = website;
            console.log(this.updatedWebsite.name);
          },
        );
        // this.websiteId = params['wid'];
        // this.developerId = params['uid'];
        this.websiteService.findAllWebsitesByUser(params.uid).subscribe(
          (websites: Website[]) => {
            this.websites = websites;
          },
        );
      }
    );
    //
    // this.websites = this.websiteService.findWebsitesByUser(this.developerId);
    // this.updatedWebsite = this.websiteService.findWebsiteById(this.websiteId);
  }

  updateWebsite(updatedWebsite) {
    if (updatedWebsite.name.trim() !== '') {
      updatedWebsite.developerId = this.developerId;
      // this.websiteService.updateWebsite(updatedWebsite._id, updatedWebsite);
      // this.router.navigate(['/user/' + this.developerId + '/website']);
      this.websiteService.updateWebsite(this.websiteId, updatedWebsite).subscribe(
        (website: Website) => {
          const url: any = '/user/' + this.developerId + '/website';
          this.router.navigate([url]);
        }
      );
    }
  }

  deleteWebsite() {
    // this.websiteService.deleteWebsite(this.websiteId);
    // this.router.navigate(['/user/' + this.developerId + '/website']);
    this.websiteService.deleteWebsite(this.websiteId).subscribe(
      (website: Website) => {
        const url: any = '/user/' + this.developerId + '/website';
        this.router.navigate([url]);
      },
    );
  }
}
