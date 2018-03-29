var mongoose = require('mongoose');
var WidgetSchema = require('./widget.schema.server.js');
var WidgetModel = mongoose.model('Widget', WidgetSchema);
var PageModel = require("../page/page.model.server");

WidgetModel.createWidget = createWidget;
WidgetModel.findAllWidgetsForPage = findAllWidgetsForPage;
WidgetModel.findWidgetById = findWidgetById;
WidgetModel.updateWidget = updateWidget;
WidgetModel.deleteWidget = deleteWidget;
WidgetModel.reorderWidgets = reorderWidgets;
WidgetModel.resetWidgets = resetWidgets;

module.exports = WidgetModel;


function createWidget(pageId, widget)  {
  widget._page = pageId;
  return WidgetModel.create(widget)
    .then(function(responseWidget){
      PageModel.findPageById(pageId)
        .then(function(page){
          page.widgets.push(responseWidget);
          return page.save();
        });
      return responseWidget;
    });
}
function findAllWidgetsForPage(pageId) {
  return WidgetModel.find({ _page: pageId });
}

function findWidgetById(widgetId) {
  return WidgetModel.findById(widgetId);
}

function updateWidget(widgetId, widget) {
  return WidgetModel.findByIdAndUpdate(widgetId, widget);
}

function deleteWidget(widgetId) {
  WidgetModel.findById(widgetId, function (err, foundWidget) {
    var index = foundWidget.position;
    resetWidgets(index, foundWidget._page);
  });
  return WidgetModel.findByIdAndRemove(widgetId);
}

function resetWidgets(index, pageId) {
  WidgetModel.find({ _page: pageId }, function (err, widgets) {
    widgets.forEach(function (widget) {
      if (widget.position > index) {
        widget.position--;
        widget.save();
      }
    })
  })
}

function reorderWidgets(pageId, start, end) {
  return WidgetModel.find({ _page: pageId }, function (err, widgets) {
    widgets.forEach(function (widget) {
      if (start < end) {
        if (widget.position === start) {
          widget.position = end;
          widget.save();
        } else if (widget.position > start
          && widget.position <= end) {
          widget.position--;
          widget.save();
        } else {
          if (widget.position === start) {
            widget.position = end;
            widget.save();
          } else if (widget.position < start
            && widget.position >= end) {
            widget.position++;
            widget.save();
          }
        }
      }

      if (start > end) {
        if (widget.position === start) {
          widget.position = end;
          widget.save();
        } else if (widget.position < start
          && widget.position >= end) {
          widget.position++;
          widget.save();
        } else {
          if (widget.position === start) {
            widget.position = end;
            widget.save();
          } else if (widget.position > start
            && widget.position <= end) {
            widget.position--;
            widget.save();
          }
        }
      }
    })
  })
}
