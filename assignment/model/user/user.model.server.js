var mongoose = require('mongoose');
var UserSchema = require("./user.schema.server");

var UserModel = mongoose.model("UserModel", UserSchema);

UserModel.createUser = createUser;

module.exports = UserModel;

function createUser(user) {
  return UserModel.create(user);
}
