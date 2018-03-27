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
  widget: any = {};
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
        console.log('');
        this.widgetId = params['wgid'];
        console.log('wgid');
        this.pageId = params['pid'];
        console.log('pid');
        this.userId = params['uid'];
        console.log('uid');
        this.websiteId = params['wid'];
        console.log('wid');
      }
    );

    // this.widget = this.widgetService.findWidgetById(this.widgetId);
      this.widgetService.findWidgetById(this.widgetId).subscribe(
          (widget: any) => {
            console.log('widget');
             this.widget = widget;
          }
      );
  }

  updateWidget(updatedwidget: Widget) {
    // this.widgetService.updateWidget(widget._id, widget);
    // this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget']);
      this.widgetService.updateWidget(this.widgetId, updatedwidget).subscribe(
          (widget: any) => {
            const url: any = '/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget';
            this.router.navigate([url]);
          }
      );
  }

  deleteWidget() {
    // this.widgetService.deleteWidget(this.widgetId);
    // this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget']);
      this.widgetService.deleteWidget(this.widgetId).subscribe(
          (widget: any) => {
              const url: any = '/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget';
              this.router.navigate([url]);
          }
      );
  }
}
