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
  websites: any[];
  updatedWebsite: any = {};
  name: String;
  developerId: String;
  description: String;

  constructor(private websiteService: WebsiteService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  // ngOnInit() {
  //   this.activatedRoute.params.subscribe(
  //     (params: any) => {
  //       this.websiteService.findWebsiteById(params.wid).subscribe(
  //         (website: any) => {
  //           this.websiteId = website._id;
  //           this.developerId = website.developerId;
  //           this.updatedWebsite = website;
  //           console.log(this.updatedWebsite.name);
  //         },
  //       );
  //       // this.websiteId = params['wid'];
  //       // this.developerId = params['uid'];
  //       this.websiteService.findAllWebsitesByUser(params.uid).subscribe(
  //         (websites: any[]) => {
  //           this.websites = websites;
  //         },
  //       );
  //     }
  //   );
  //   //
  //   // this.websites = this.websiteService.findWebsitesByUser(this.developerId);
  //   // this.updatedWebsite = this.websiteService.findWebsiteById(this.websiteId);
  // }
  // ngOnInit() {
  //   this.activatedRoute.params.subscribe(
  //     params => {
  //       this.websiteService.findWebsiteById(params.wid).subscribe(
  //         (website: any) => {
  //           this.websiteId = website._id;
  //           this.developerId = website._user;
  //           this.updatedWebsite = website;
  //         },
  //         (error: any) => {
  //           // this is the place to put an error message
  //         }
  //       );
  //       this.websiteService.findAllWebsitesByUser(params.uid).subscribe(
  //         (websites: any[]) => {
  //           this.websites = websites;
  //         },
  //         (error: any) => {
  //           // this is the place to put an error message
  //         }
  //       );
  //     }
  //   );
  // }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.developerId = params['uid'];
        this.websiteId = params['wid'];
        this.websiteService.findWebsiteById(this.websiteId).subscribe(
          (website: any) => {
            this.updatedWebsite = website;
          }
        );
        this.websiteService.findAllWebsitesByUser(this.developerId).subscribe(
          (websites: any[]) => {
            this.websites = websites;
          }
        );
      }
    );
    // this.updatedPage = this.pageService.findPageById(this.pageId);
  }

  updateWebsite(updatedWebsite) {
    if (updatedWebsite.name !== null
      && updatedWebsite.description !== null
      && updatedWebsite.name.trim() !== ''
      && updatedWebsite.description.trim() !== '') {
      updatedWebsite.developerId = this.developerId;
      // this.websiteService.updateWebsite(updatedWebsite._id, updatedWebsite);
      // this.router.navigate(['/user/' + this.developerId + '/website']);
      this.websiteService.updateWebsite(this.websiteId, updatedWebsite).subscribe(
        (website: any) => {
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
