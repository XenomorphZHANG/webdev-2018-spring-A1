

var mongoose = require('mongoose');

var UserSchema = mongoose.Schema ({
  username: String,
  password: String,
  firstName: String,
  website: [WebsiteSchema],
  }, {collection:'user'} /// can be flexible but needed to be consistent

);

module.exports = UserSchema;
