import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WidgetService } from '../../../services/widget.service.client';
import { Widget } from '../../../models/widget.model.client';

@Component({
  selector: 'app-widget-chooser',
  templateUrl: './widget-chooser.component.html',
  styleUrls: ['./widget-chooser.component.css']
})
export class WidgetChooserComponent implements OnInit {

  userId: String;
  websiteId: String;
  pageId: String;
  widgetId: String;

  constructor(
    private widgetService: WidgetService, private activatedRoute: ActivatedRoute, private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.userId = params['uid'];
        this.websiteId = params['wid'];
        this.pageId = params['pid'];
        this.widgetId = params['wgid'];
      }
    );
  }

  createWidget(widgetType: String) {
    const newWidget: Widget = {
      _id: '', widgetType: widgetType, pageId: '', size: '1', text: 'text', url: 'url', width: '100%'
    }
    this.widgetService.createWidget(this.pageId, newWidget);
    this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId
    + '/page/' + this.pageId + '/widget/' + newWidget._id] );
  }
}
