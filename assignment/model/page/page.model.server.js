var mongoose = require('mongoose');
var PageSchema = require('./page.schema.server.js');
var PageModel = mongoose.model('Page', PageSchema);
var WebsiteModel = require("../website/website.model.server");

PageModel.createPage = createPage;
PageModel.findAllPagesForWebsite = findAllPagesForWebsite;
PageModel.findPageById = findPageById;
PageModel.updatePage = updatePage;
PageModel.deletePage = deletePage;

module.exports = PageModel;

// function createPage(websiteId, page) {
//   page._website = websiteId;
//   return Page.create(page);
// }
function createPage(websiteId, page) {
  page._website= websiteId;
  return PageModel.create(page)
    .then(function(responsePage){
      WebsiteModel.findWebsiteById(websiteId)
        .then(function(website){
          website.pages.push(responsePage);
          return website.save();
        });
      return responsePage;
    });
}

function findAllPagesForWebsite(websiteId) {
  return PageModel.find({ _website: websiteId });
}

function findPageById(pageId) {
  return PageModel.findById(pageId);
}

function updatePage(pageId, page) {
  return PageModel.findByIdAndUpdate(pageId, page);
}

function deletePage(pageId) {
  return PageModel.findByIdAndRemove(pageId);
}
