import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { WidgetService } from '../../../services/widget.service.client';
import { Widget } from '../../../models/widget.model.client';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {

  userId: String;
  websiteId: String;
  pageId: String;
  widgetId: String;
  widget: any = {};

  constructor(
    private widgetService: WidgetService, private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.userId = params['uid'];
        this.websiteId = params['uid'];
        this.pageId = params['pid'];
        this.widgetId = params['wgid'];
          this.widgetService.findWidgetById(this.widgetId).subscribe(
              (widget: any) => {
                  this.widget = widget;
              }
          );
      }
    );

    // this.widget = this.widgetService.findWidgetById(this.widgetId);
  }

}
