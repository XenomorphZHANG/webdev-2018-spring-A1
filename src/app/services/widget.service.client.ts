import { Injectable } from '@angular/core';
import { Widget } from '../models/widget.model.client';

@Injectable()
export class WidgetService {

  constructor() { }

  widgets: Widget[] = [
    { _id: '123', widgetType: 'HEADER', pageId: '321', size: '2', text: 'GIZMODO', url: '', width: '' },
    { _id: '234', widgetType: 'HEADER', pageId: '321', size: '4', text: 'Lorem ipsum', url: '', width: '' },
    { _id: '345', widgetType: 'IMAGE', pageId: '321', size: '', text: '', width: '100%', url: 'http://lorempixel.com/400/200/' },
    { _id: '456', widgetType: 'HTML', pageId: '321', size: '', text: '<p>Lorem ipsum</p>', url: '', width: '' },
    { _id: '567', widgetType: 'HEADER', pageId: '321', size: '4', text: 'Lorem ipsum', url: '', width: '' },
    { _id: '678', widgetType: 'YOUTUBE', pageId: '321', size: '', text: '', url: 'https://www.youtube.com/embed/mFkli0wD4-w', width: '100%' },
    { _id: '789', widgetType: 'HTML', pageId: '321', size: '<p>Lorem ipsum</p>', text: '', url: '', width: '' }
  ];

  createWidget(pageId: String, widget: any) {
    widget._id = Math.random().toString();
    widget.pageId = pageId;
    this.widgets.push(widget);
  }

  findWidgetsByPageId(pageId: String) {
    const resultSet: Widget[] = [];
    for (let i = 0; i < this.widgets.length; i++) {
      if (this.widgets[i].pageId === pageId) {
        resultSet.push(this.widgets[i]);
      }
    }
    return resultSet;
  }

  findWidgetById(widgetId: String) {
    for (let i = 0; i < this.widgets.length; i++) {
      if (this.widgets[i]._id === widgetId) {
        return this.widgets[i];
      }
    }
  }

  updateWidget(widgetId: String, widget: any) {
    for (let i = 0; i < this.widgets.length; i++) {
      if (this.widgets[i]._id === widgetId && this.widgets[i].widgetType === widget.widgetType) {
        switch (widget.widgetType) {
          case 'HEADER':
            this.widgets[i].text = widget.text;
            this.widgets[i].size = widget.size;
            return true;

          case 'IMAGE':
            this.widgets[i].text = widget.text;
            this.widgets[i].url = widget.url;
            this.widgets[i].width = widget.width;
            return true;

          case 'YOUTUBE':
            this.widgets[i].text = widget.text;
            this.widgets[i].url = widget.url;
            this.widgets[i].width = widget.width;
            return true;
        }
      }
    }
  }

  deleteWidget(widgetId: String) {
    for (let i = 0; i < this.widgets.length; i++) {
      if (this.widgets[i]._id === widgetId) {
        this.widgets.splice(i, 1);
      }
    }
  }
}
