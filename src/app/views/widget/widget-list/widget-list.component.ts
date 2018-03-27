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
  widgets = [{}];
  widget = {};

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
          console.log(this.widgets);
          this.widgetService.findAllWidgetsForPage(this.pageId).subscribe(
              (widgets: any[]) => {
                  this.widgets = widgets;
              });
      }
    );
    // console.log(this.widgets);
    // this.widgetService.findAllWidgetsForPage(this.pageId).subscribe(
    //     (widgets: Widget[]) => {
    //   this.widgets = widgets;
    // });
  }

  reorderWidgets(indexes) {
    // call widget service function to update widget as per index
    this.widgetService.reorderWidgets(indexes.startIndex, indexes.endIndex, this.pageId)
      .subscribe(
        (data) => console.log(data)
      );
  }
}
