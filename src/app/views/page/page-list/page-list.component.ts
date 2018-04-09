import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {SharedService} from '../../../services/shared.service';
import { PageService } from '../../../services/page.service.client';
// import { Page } from '../../../models/page.model.client';
import {WebsiteService} from '../../../services/website.service.client';
import {Website} from '../../../models/website.model.client';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  userId: String;
  websiteId: String;
  pages: any = [];

  constructor(private pageService: PageService,
              private websiteService: WebsiteService,
              private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private shardService: SharedService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        const user = this.shardService.user;
        this.userId = user._id;
        this.websiteId = params['wid'];
        this.pageService.findAllPagesForWebsite(this.websiteId).subscribe(
          (pages: any[]) => {
            this.pages = pages;
          }
        );
      }
    );

    // this.activatedRoute.params.subscribe(
    //   (params: any) => {
    //     this.userId = params['uid'];
    //     this.websiteId = params['wid'];
    //   }
    // );
    //
    // this.pages = this.pageService.findAllPagesForWebsite(this.websiteId);
    // console.log('test1')


    //   this.activatedRoute.params.subscribe(
    //     params => {
    //       this.websiteService.findWebsiteById(params.wid).subscribe(
    //         (website: any) => {
    //           // console.log('test2');
    //           if (website._user === params.uid) {
    //             this.websiteId = params.wid;
    //             // console.log('test3');
    //             this.userId = params.uid;
    //             // console.log('test4');
    //             this.pageService.findAllPagesForWebsite(this.websiteId).subscribe(
    //               (pages: any[]) => {
    //                 this.pages = pages;
    //                 // console.log('test2');
    //               },
    //               (error: any) => {
    //                 // console.log('test1');
    //                 console.log(error);
    //               }
    //             );
    //           }
    //         },
    //       );
    //     }
    //   );
    }
}
