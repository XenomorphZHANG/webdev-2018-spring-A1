// // import {Component, OnInit, ViewChild} from '@angular/core';
// // import { ActivatedRoute, Router } from '@angular/router';
// //
// // import { WidgetService } from '../../../../services/widget.service.client';
// // import { Widget } from '../../../../models/widget.model.client';
// // import {NgForm} from '@angular/forms';
// //
// // @Component({
// //   selector: 'app-widget-image',
// //   templateUrl: './widget-image.component.html',
// //   styleUrls: ['./widget-image.component.css']
// // })
// // export class WidgetImageComponent implements OnInit {
// //   @ViewChild('f') imageForm: NgForm;
// //   widget: Widget;
// //   userId: String;
// //   websiteId: String;
// //   pageId: String;
// //   widgetId: String;
// //   name: String;
// //   text: String;
// //   url: String;
// //   width: String;
// //
// //   constructor(
// //     private widgetService: WidgetService, private activatedRoute: ActivatedRoute,
// //     private router: Router
// //   ) { }
// //
// //   ngOnInit() {
// //     this.activatedRoute.params.subscribe(
// //       (params: any) => {
// //         this.widgetId = params['wgid'];
// //         this.pageId = params['pid'];
// //         this.userId = params['uid'];
// //         this.websiteId = params['wid'];
// //       }
// //     );
// //
// //     // this.widget = this.widgetService.findWidgetById(this.widgetId);
// //       this.widgetService.findWidgetById(this.widgetId).subscribe(
// //           (widget: Widget) => {
// //             this.widget = widget;
// //           }
// //       );
// //   }
// //
// //   updateWidget(updatedwidget: Widget) {
// //     this.widgetService.updateWidget(this.widgetId, updatedwidget).subscribe(
// //         (widget: Widget) => {
// //           const url: any = '/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget';
// //           this.router.navigate([url]);
// //         }
// //     );
// //     // this.widgetService.updateWidget(widget._id, widget);
// //     // this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget']);
// //   }
// //
// //   deleteWidget() {
// //     // this.widgetService.deleteWidget(this.widgetId);
// //     // this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget']);
// //     this.widgetService.deleteWidget(this.widgetId).subscribe(
// //         (widget: Widget) => {
// //             const url: any = '/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget';
// //             this.router.navigate([url]);
// //         }
// //     );
// //   }
// //
// //   upload() {
// //     this.name = this.imageForm.value.name;
// //     this.text = this.imageForm.value.text;
// //     this.url = this.imageForm.value.url;
// //     this.width = this.imageForm.value.width;
// //     const imageWidget = new Widget(undefined, 'IMAGE', this.pageId, '',
// //       this.text.toString(), this.width.toString(), this.url.toString());
// //     this.widgetService.createWidget(this.pageId, imageWidget).subscribe(
// //         (widget: Widget) => {
// //           this.widget = widget;
// //         }
// //     );
// //       // this.widgetService.widgets.length
// //   }
// // }
// //     widget: Widget;
// //     widget: Widget = {
// //         _id: '', widgetType: '', name: '', pageId: '', size: '1', text: '', url: '', width: '100%',
// //         height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: ''
// //     };
// //     userId: String;
// //     websiteId: String;
// //     pageId: String;
// //     widgetId: String;
// //
// //     constructor(
// //         private widgetService: WidgetService, private activatedRoute: ActivatedRoute,
// //         private router: Router
// //     ) { }
// //
// //     ngOnInit() {
// //         this.activatedRoute.params.subscribe(
// //             (params: any) => {
// //                 this.widgetId = params['wgid'];
// //                 this.pageId = params['pid'];
// //                 this.userId = params['uid'];
// //                 this.websiteId = params['wid'];
// //             }
// //         );
// //
// //         // this.widget = this.widgetService.findWidgetById(this.widgetId);
// //         this.widgetService.findWidgetById(this.widgetId).subscribe(
// //             (widget: Widget) => {
// //                 this.widget = widget;
// //             }
// //         );
// //     }
// //
// //     updateWidget(updatedwidget: Widget) {
// //         // this.widgetService.updateWidget(widget._id, widget);
// //         // this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget']);
// //         this.widgetService.updateWidget(this.widgetId, updatedwidget).subscribe(
// //             (widget: Widget) => {
// //                 const url: any = '/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget';
// //                 this.router.navigate([url]);
// //             }
// //         );
// //     }
// //
// //     deleteWidget() {
// //         // this.widgetService.deleteWidget(this.widgetId);
// //         // this.router.navigate(['/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget']);
// //         this.widgetService.deleteWidget(this.widgetId).subscribe(
// //             (widget: Widget) => {
// //                 const url: any = '/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget';
// //                 this.router.navigate([url]);
// //             }
// //         );
// //     }
// // }
//
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
//
// import { WidgetService } from '../../../../services/widget.service.client';
// import { Widget } from '../../../../models/widget.model.client';
// import { PageService } from '../../../../services/page.service.client';
// import { WebsiteService } from '../../../../services/website.service.client';
// import { UserService } from '../../../../services/user.service.client';
// import { Page } from '../../../../models/page.model.client';
// import { Website } from '../../../../models/website.model.client';
//
// @Component({
//     selector: 'app-widget-image',
//     templateUrl: './widget-image.component.html',
//     styleUrls: ['./widget-image.component.css']
// })
// export class WidgetImageComponent implements OnInit {
//
//     // properties
//     // widget: Widget = {
//     //     _id: "", widgetType: '', name: '', pageId: "", size: "1", text: "", url: "", width: "100%",
//     //     height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: ''
//     // };
//     widget: Widget;
//     userId: String;
//     websiteId: String;
//     pageId: String;
//     widgetId: String;
//
//     constructor(
//         private widgetService: WidgetService,
//         private pageService: PageService,
//         private websiteService: WebsiteService,
//         private userService: UserService,
//         private activatedRoute: ActivatedRoute,
//         private router: Router
//     ) {
//         // this.widget = new Widget('', 'IMAGE', '', '', '1', '', '', '100%',
//         //     100, 0, '', '', false, false, '')
//         this.widget = {
//             _id: '', widgetType: 'IMAGE', name: '', pageId: '', size: '1', text: '', url: '', width: '100%',
//             height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: ''
//         };
//     }
//
//     ngOnInit() {
//         this.activatedRoute.params.subscribe(
//             params => {
//                 this.widgetService.findWidgetById(params.wgid).subscribe(
//                     (widget: Widget) => {
//                         if (widget.pageId === params.pid) {
//                             this.pageService.findPageById(widget.pageId).subscribe(
//                                 (page: Page) => {
//                                     if (page.websiteId === params.wid) {
//                                         this.websiteService.findWebsiteById(page.websiteId).subscribe(
//                                             (website: Website) => {
//                                                 if (website.developerId === params.uid) {
//                                                     this.userId = params.uid;
//                                                     this.websiteId = params.wid;
//                                                     this.pageId = params.pid;
//                                                     this.widgetId = params.wgid;
//                                                     this.widget = widget;
//                                                 } else {
//                                                     console.log("User ID does not match.");
//                                                 }
//                                             }
//                                         );
//                                     } else {
//                                         console.log("Website ID does not match.");
//                                     }
//                                 }
//                             );
//                         }
//                     }
//                 );
//             }
//         );
//     }
//
//     updateWidget(updatedwidget: Widget) {
//         if (this.widgetId === undefined) {
//             this.widgetService.createWidget(this.pageId, this.widget).subscribe(
//                 (widget: Widget) => {
//                     this.widget = widget;
//                     console.log(this.widget);
//                     const url: any = '/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget';
//                     this.router.navigate([url]);
//                     // this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
//                 }
//             );
//         } else {
//             this.activatedRoute.params.subscribe(params => {
//                 return this.widgetService.updateWidget(this.widgetId, updatedwidget).subscribe(
//                     (data: any) => {
//                         // alert(this.widget.name + ' saved successfully');
//                         console.log(this.widget);
//                         const url: any = '/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget';
//                         this.router.navigate([url]);
//                         // this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
//                     }
//                 );
//             });
//         }
//     }
//
//     deleteWidget() {
//         this.widgetService.deleteWidget(this.widgetId).subscribe(
//             (widget: Widget) => {
//                 let url: any = "/user/" + this.userId + "/website/" + this.websiteId + "/page/" + this.pageId + "/widget";
//                 this.router.navigate([url]);
//             },
//             (error: any) => {
//                 console.log(error);
//             }
//         );
//     }
// }
//
// import {Component, OnInit} from '@angular/core';
// import {Widget} from '../../../../models/widget.model.client';
// import {WidgetService} from '../../../../services/widget.service.client';
// import {ActivatedRoute, Router} from '@angular/router';
// import {environment} from '../../../../../environments/environment';
//
// @Component({
//     selector: 'app-widget-image',
//     templateUrl: './widget-image.component.html',
//     styleUrls: ['./widget-image.component.css']
// })
// export class WidgetImageComponent implements OnInit {
//     widgetId: string;
//     pageId: string;
//     userId: string;
//     websiteId: string;
//     widget: Widget;
//     baseUrl: string;
//
//     constructor(private activatedRoute: ActivatedRoute, private widgetService: WidgetService, private router: Router) {
//         this.widget = new Widget('', '', 'IMAGE', '', '', '', '', '', 0, '', false);
//     }
//
//     ngOnInit() {
//         this.baseUrl = environment.baseUrl;
//         this.activatedRoute.params.subscribe(params => {
//             this.pageId = params['pid'];
//             this.userId = params['uid'];
//             this.websiteId = params['wid'];
//             this.widgetId = params['wgid'];
//             if (this.widgetId !== undefined) {
//                 return this.widgetService.findWidgetById(this.widgetId).subscribe(
//                     (widget) => {
//                         this.widget = widget;
//                     }
//                 );
//             }
//         });
//     }
//
//     updateImage() {
//         if (this.widgetId === undefined) {
//             this.widgetService.createWidget(this.pageId, this.widget).subscribe(
//                 (widget: Widget) => {
//                     this.widget = widget;
//                     this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
//                 }
//             );
//         } else {
//             this.activatedRoute.params.subscribe(params => {
//                 return this.widgetService.updateWidget(this.widget).subscribe(
//                     (data: any) => {
//                         alert(this.widget.name + ' saved successfully');
//                         this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
//                     }
//                 );
//             });
//         }
//     }
//
//     deleteImage() {
//         this.activatedRoute.params.subscribe(params => {
//             return this.widgetService.deleteWidget(this.widgetId).subscribe(
//                 (data: any) => {
//                     this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
//                 }
//             );
//         });
//     }
//
//     uploadImage() {
//         this.activatedRoute.params.subscribe(params => {
//             return this.widgetService.createWidget(this.pageId, this.widget).subscribe(
//                 (widget: Widget) => {
//                     this.widget = widget;
//                     alert(this.widget.name + ' saved successfully');
//                     this.router.navigate(['/user', this.userId, 'website', this.websiteId, 'page', this.pageId, 'widget']);
//                 }
//             );
//         });
//     }
//
// }
import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WidgetService} from '../../../../services/widget.service.client';
import {Widget} from '../../../../models/widget.model.client';
import {NgForm} from '@angular/forms';
import {environment} from '../../../../../environments/environment';

@Component({
    selector: 'app-widget-image',
    templateUrl: './widget-image.component.html',
    styleUrls: ['./widget-image.component.css']
})
export class WidgetImageComponent implements OnInit {
    @ViewChild('f') imageForm: NgForm;
    pageID: String;
    wgid: String;
    websiteId: String;
    userId: String;
    type: String;
    width: String;
    name: String;
    text: String;
    url: String;
    widget: any = {};
    baseUrl: String = environment.baseUrl;

    constructor(private activatedRoute: ActivatedRoute, private widgetService: WidgetService, private route: Router) {}

    upload() {
        // this.name = this.imageForm.value.headerName;
        this.text = this.imageForm.value.text;
        this.url = this.imageForm.value.url;
        this.width = this.imageForm.value.width;
        this.type = 'IMAGE'

        // const new_widget = new Widget(undefined, 'IMAGE', this.pageID,
        //     '1', this.text.toString(), this.width.toString(), this.url.toString());
        const new_widget = {
            _id: '', widgetType: this.type, name: '', pageId: this.pageID, size: '1', text: this.text.toString(),
            url: this.url.toString(), width: this.width.toString(),
            height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: ''
        };
        if (new_widget.widgetType === undefined) {
            new_widget.widgetType = 'IMAGE';
        }
        this.widgetService.createWidget(this.pageID, new_widget).subscribe(
            (widget: any) => {
                this.widget = widget;
                console.log(this.widget);
            });
    }

    delete() {
        this.widgetService.deleteWidget(this.wgid).subscribe(
            () => this.route.navigate(['../'], {relativeTo: this.activatedRoute})
        );
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(
            (params: any) => {
                this.userId = params['uid'];
                this.websiteId = params['wid'];
                this.pageID = params['pid'];
                this.wgid = params['wgid'];
                if (this.wgid === undefined) {
                    this.widget = {
            _id: '', widgetType: 'IMAGE', name: '', pageId: this.pageID, size: '1', text: '', url: '', width: '100%',
            height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false, placeholder: ''
        };
                    // this.widget = new Widget(undefined, 'IMAGE', this.pageID, '', '', '', '');
                } else {
                    this.widgetService.findWidgetById(this.wgid).subscribe(
                        (widget: any) => {
                            this.widget = widget;
                            console.log(this.widget);
                        });
                }
            });
    }

}
