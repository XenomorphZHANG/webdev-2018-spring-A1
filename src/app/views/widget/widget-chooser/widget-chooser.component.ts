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
  widgets: any[];

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
        this.widgetService.findAllWidgetsForPage(this.pageId).subscribe(
          (widgets: any[]) => {
            // console.log('tst1');
            this.widgets = widgets;
            // console.log('tst');
        }
        );
      }
    );
  }

  createWidget(widgetType: String) {
    // const newWidget: any = {_id: '', widgetType: widgetType, name: '', pageId: '', size: '1', text: 'text',
    //     url: 'url', width: '100%', height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: ''
    // };
    const newWidget: any = {
      type: widgetType, name: 'name', size: 1, width: '30%',
      height: '30%', rows: 0, deletable: false, formatted: false, placeholder: '',
      position: this.widgets.length
    }
    // console.log(newWidget);
    console.log(this.widgets.length)
    this.widgetService.createWidget(this.pageId, newWidget).subscribe(
        (widget: any) => {
          // console.log(newWidget);
          const url: any = '/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget/' + widget._id;
          this.router.navigate([url]);
          // console.log(newWidget);
        }
    );
  }
}
