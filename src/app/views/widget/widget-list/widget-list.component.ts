import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { WidgetService } from '../../../services/widget.service.client';
import { Widget } from '../../../models/widget.model.client';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {

  public url;
  userId: String;
  websiteId: String;
  pageId: String;
  widgets: Widget[];

  constructor(
    private widgetService: WidgetService,
    private activatedRoute: ActivatedRoute,
    private domSanitizer: DomSanitizer
  ) {
  }

  getURL(url: String) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url.toString());
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.userId = params['uid'];
        this.websiteId = params['uid'];
        this.pageId = params['pid'];
      }
    );
    this.widgets = this.widgetService.findWidgetsByPageId(this.pageId);
    console.log(this.widgets);
  }
}
