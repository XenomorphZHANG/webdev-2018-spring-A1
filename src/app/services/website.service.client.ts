import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

import { Website } from '../models/website.model.client';

@Injectable()
export class WebsiteService {

  constructor(private http: Http) {
  }

  baseUrl = environment.baseUrl;

  // websites: any[] = [
  //   {_id: '123', name: 'Facebook', developerId: '456', description: 'Lorem'},
  //   {_id: '234', name: 'Tweeter', developerId: '456', description: 'Lorem'},
  //   {_id: '456', name: 'Gizmodo', developerId: '456', description: 'Lorem'},
  //   {_id: '890', name: 'Go', developerId: '123', description: 'Lorem'},
  //   {_id: '567', name: 'Tic Tac Toe', developerId: '123', description: 'Lorem'},
  //   {_id: '678', name: 'Checkers', developerId: '123', description: 'Lorem'},
  //   {_id: '789', name: 'Chess', developerId: '234', description: 'Lorem'}
  // ];

  createWebsite(userId: String, website: any) {
    // website._id = Math.random().toString();
    // website.developerId = userId;
    // this.websites.push(website);
    // console.log(website);
    const url = this.baseUrl + '/api/user/' + userId + '/website';
    return this.http.post(url, website).map(
      (res: Response) => {
        return res.json();
      }
    );
  }

  findAllWebsitesByUser(userId: String) {
    // const resultSet = [];
    // for (let i = 0; i < this.websites.length; i++) {
    //   if (this.websites[i].developerId === userId) {
    //     resultSet.push(this.websites[i]);
    //   }
    // }
    // return resultSet;
    const url = this.baseUrl + '/api/user/' + userId + '/website';
    return this.http.get(url).map(
      (res: Response) => {
        return res.json();
      }
    );
  }

  findWebsiteById(websiteId: String) {
    // for (let i = 0; i < this.websites.length; i++) {
    //   if (this.websites[i]._id === websiteId) {
    //     return this.websites[i];
    //   }
    // }
    const url = this.baseUrl + '/api/website/' + websiteId;
    return this.http.get(url).map(
      (res: Response) => {
        return res.json();
      }
    );
  }

  updateWebsite(websiteId: String, website: any) {
    // for (let i = 0; i < this.websites.length; i++) {
    //   if (this.websites[i]._id === websiteId) {
    //     this.websites[i].name = website.name;
    //     this.websites[i].description = website.description;
    //   }
    // }
    const url = this.baseUrl + '/api/website/' + websiteId;
    return this.http.put(url, website).map(
      (res: Response) => {
        return res.json();
      }
    );
  }

  deleteWebsite(websiteId: String) {
    // for (let i = 0; i < this.websites.length; i++) {
    //   if (this.websites[i]._id === websiteId) {
    //     this.websites.splice(i, 1);
    //   }
    // }
    const url = this.baseUrl + '/api/website/' + websiteId;
    return this.http.delete(url).map(
      (res: Response) => {
        return res.json();
      }
    );
  }
}
