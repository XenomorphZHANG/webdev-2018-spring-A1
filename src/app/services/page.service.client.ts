import { Injectable } from '@angular/core';
import { Page } from '../models/page.model.client';

@Injectable()
export class PageService {

  constructor() {
  }

  pages: Page[] = [
    {_id: '321', name: 'Post 1', websiteId: '456', title: 'Lorem'},
    {_id: '432', name: 'Post 2', websiteId: '456', title: 'Lorem'},
    {_id: '543', name: 'Post 3', websiteId: '456', title: 'Lorem'}
  ];

  createPage(websiteId: String, page: any) {
    page._id = Math.random().toString();
    page.websiteId = websiteId;
    this.pages.push(page);
    console.log(this.pages);
  }

  findPageByWebsiteId(websiteId: String) {
    const resultSet = [];
    for (let i = 0; i < this.pages.length; i++) {
      if (this.pages[i].websiteId === websiteId) {
        resultSet.push(this.pages[i]);
      }
    }
    return resultSet;
  }

  findPageById(pageId: String) {
    for (let i = 0; i < this.pages.length; i++) {
      if (this.pages[i]._id === pageId) {
        return this.pages[i];
      }
    }
  }

  updatePage(pageId: String, page: any) {
    for (let i = 0; i < this.pages.length; i++) {
      if (this.pages[i]._id === pageId) {
        this.pages[i].name = page.name;
        this.pages[i].title = page.title;
      }
    }
  }

  deletePage(pageId: String) {
    for (let i = 0; i < this.pages.length; i++) {
      if (this.pages[i]._id === pageId) {
        this.pages.splice(i, 1);
      }
    }
  }
}
