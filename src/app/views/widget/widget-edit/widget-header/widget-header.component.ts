import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { WidgetService } from '../../../../services/widget.service.client';
import { Widget } from '../../../../models/widget.model.client';

@Component({
  selector: 'app-widget-header',
  templateUrl: './widget-header.component.html',
  styleUrls: ['./widget-header.component.css']
})
export class WidgetHeaderComponent implements OnInit {
  widget: Widget;
  userId: String;
  websiteId: String;
  pageId: String;
  widgetId: String;

  constructor(
    private widgetService: WidgetService, private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.widgetId = params['wgid'];
        this.pageId = params['pid'];
        this.userId = params['uid'];
        this.websiteId = params['wid'];
      }
    );

    this.widget = this.widgetService.findWidgetById(this.widgetId);
  }

  updateWidget(widget: Widget) {
    this.widgetService.updateWidget(widget._id, widget);
    this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget']);
  }

  deleteWidget() {
    this.widgetService.deleteWidget(this.widgetId);
    this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget']);
  }
}