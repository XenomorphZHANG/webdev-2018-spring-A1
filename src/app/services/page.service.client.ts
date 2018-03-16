import { Injectable } from '@angular/core';
import { Page } from '../models/page.model.client';

import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class PageService {

  constructor(private http: Http) {
  }

  baseUrl = environment.baseUrl;
  // pages: Page[] = [
  //   {_id: '321', name: 'Post 1', websiteId: '456', title: 'Lorem'},
  //   {_id: '432', name: 'Post 2', websiteId: '456', title: 'Lorem'},
  //   {_id: '543', name: 'Post 3', websiteId: '456', title: 'Lorem'}
  // ];

  createPage(websiteId: String, page: any) {
    const url = this.baseUrl + '/api/website/' + websiteId + '/page';
    // page._id = Math.random().toString();
    // page.websiteId = websiteId;
    // this.pages.push(page);
    // console.log(this.pages);
    return this.http.post(url, page).map(
      (res: Response) => {
        return res.json();
      }
    );
  }

  findAllPagesForWebsite(websiteId: String) {
    // const resultSet = [];
    // for (let i = 0; i < this.pages.length; i++) {
    //   if (this.pages[i].websiteId === websiteId) {
    //     resultSet.push(this.pages[i]);
    //   }
    // }
    // return resultSet;
    const url = this.baseUrl + '/api/website/' + websiteId + '/page';
    return this.http.get(url).map(
      (res: Response) => {
        return res.json();
      }
    );
  }

  findPageById(pageId: String) {
    // for (let i = 0; i < this.pages.length; i++) {
    //   if (this.pages[i]._id === pageId) {
    //     return this.pages[i];
    //   }
    // }
    const url = this.baseUrl + '/api/page/' + pageId;
    return this.http.get(url).map(
      (res: Response) => {
        return res.json();
      }
    );
  }

  updatePage(pageId: String, page: any) {
    // for (let i = 0; i < this.pages.length; i++) {
    //   if (this.pages[i]._id === pageId) {
    //     this.pages[i].name = page.name;
    //     this.pages[i].title = page.title;
    //   }
    // }
    const url = this.baseUrl + '/api/page/' + pageId;
    return this.http.put(url, page).map(
      (res: Response) => {
        return res.json();
      }
    );
  }

  deletePage(pageId: String) {
    // for (let i = 0; i < this.pages.length; i++) {
    //   if (this.pages[i]._id === pageId) {
    //     this.pages.splice(i, 1);
    //   }
    // }
    const url = this.baseUrl + '/api/page/' + pageId;
    return this.http.delete(url).map(
      (res: Response) => {
        return res.json();
      }
    );
  }
}
