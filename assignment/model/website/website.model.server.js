var mongoose = require('mongoose');
var WebsiteSchema = require('./website.schema.server.js');
var WebsiteModel = mongoose.model('Website', WebsiteSchema);
var UserModel = require("../user/user.model.server");

WebsiteModel.createWebsiteForUser = createWebsiteForUser;
WebsiteModel.findAllWebsitesForUser = findAllWebsitesForUser;
WebsiteModel.findWebsiteById = findWebsiteById;
WebsiteModel.updateWebsite = updateWebsite;
WebsiteModel.deleteWebsite = deleteWebsite;

module.exports = WebsiteModel;

// function createWebsiteForUser(userId, website) {
//   website._user = userId;
//   return Website.create(website);
// }
function createWebsiteForUser(userId, website){
  website._user = userId;
  return WebsiteModel.create(website)
    .then(function(responseWebsite){
      UserModel.findUserById(userId)
        .then(function(user){
          user.websites.push(responseWebsite);
          return user.save();
        });
      return responseWebsite;
    });
}

function findAllWebsitesForUser(userId) {
  return WebsiteModel.find({ _user: userId });
}

function findWebsiteById(websiteId) {
  return WebsiteModel.findById(websiteId);
}

function updateWebsite(websiteId, website) {
  return WebsiteModel.findByIdAndUpdate(websiteId, website);
}

function deleteWebsite(websiteId) {
  return WebsiteModel.findByIdAndRemove(websiteId);
}
