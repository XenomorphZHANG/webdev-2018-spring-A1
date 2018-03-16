// import { Component, OnInit } from '@angular/core';
// import {WidgetService} from '../../../../services/widget.service.client';
// import {ActivatedRoute, Router} from '@angular/router';
// import {Widget} from '../../../../models/widget.model.client';
//
// @Component({
//   selector: 'app-widget-text',
//   templateUrl: './widget-text.component.html',
//   styleUrls: ['./widget-text.component.css']
// })
// export class WidgetTextComponent implements OnInit {
//     widget: Widget;
//     userId: String;
//     websiteId: String;
//     pageId: String;
//     widgetId: String;
//
//     constructor(
//         private widgetService: WidgetService, private activatedRoute: ActivatedRoute,
//         private router: Router
//     ) { }
//
//     ngOnInit() {
//         this.activatedRoute.params.subscribe(
//             (params: any) => {
//                 this.widgetId = params['wgid'];
//                 this.pageId = params['pid'];
//                 this.userId = params['uid'];
//                 this.websiteId = params['wid'];
//             }
//         );
//
//         // this.widget = this.widgetService.findWidgetById(this.widgetId);
//         this.widgetService.findWidgetById(this.widgetId).subscribe(
//             (widget: Widget) => {
//                 this.widget = widget;
//             }
//         );
//     }
//
//     updateWidget(updatedwidget: Widget) {
//         // this.widgetService.updateWidget(widget._id, widget);
//         // this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget']);
//         this.widgetService.updateWidget(this.widgetId, updatedwidget).subscribe(
//             (widget: Widget) => {
//                 const url: any = '/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget';
//                 this.router.navigate([url]);
//             }
//         );
//     }
//
//     deleteWidget() {
//         // this.widgetService.deleteWidget(this.widgetId);
//         // this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget']);
//         this.widgetService.deleteWidget(this.widgetId).subscribe(
//             (widget: Widget) => {
//                 const url: any = '/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget';
//                 this.router.navigate([url]);
//             }
//         );
//     }
// }
import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../../../services/widget.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {Widget} from '../../../../models/widget.model.client';

@Component({
    selector: 'app-widget-text',
    templateUrl: './widget-text.component.html',
    styleUrls: ['./widget-text.component.css']
})
export class WidgetTextComponent implements OnInit {

    wgid: String;
    pageID: String;
    widget: Widget;
    constructor(private activatedRoute: ActivatedRoute, private widgetService: WidgetService, private route: Router) { }

    delete() {
        this.widgetService.deleteWidget(this.wgid).subscribe(
            () => this.route.navigate(['../'], {relativeTo: this.activatedRoute})
        );
    }

    update() {
        if (this.wgid === undefined) {
            this.widgetService.createWidget(this.pageID, this.widget).subscribe(
                (widget: Widget) => {
                    this.widget = widget;
                    this.route.navigate(['../'], {relativeTo: this.activatedRoute});
                }
            );
        } else {
            this.widgetService.updateWidget(this.wgid, this.widget).subscribe(
                (widget: Widget) => {
                    this.widget = widget;
                    this.route.navigate(['../'], {relativeTo: this.activatedRoute});
                }
            );
        }
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(
            (params: any) => {
                this.pageID = params['pid'];
                this.wgid = params['wgid'];
                if (this.wgid === undefined) {
                    // this.widget = new Widget('', 'TEXT', this.pageID, '', '', '', '');
                    this.widget = {
                        _id: '', widgetType: 'TEXT', name: '', pageId: this.pageID, size: '1', text: '', url: '', width: '100%',
                        height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: ''
                    };
                } else {
                    this.widgetService.findWidgetById(this.wgid).subscribe(
                        (widget: Widget) => {
                            this.widget = widget;
                        });
                }
            });
    }

}
