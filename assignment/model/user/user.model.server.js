// var mongoose = require('mongoose');
// var UserSchema = require("./user.schema.server");
//
// var UserModel = mongoose.model("UserModel", UserSchema);
//
// UserModel.createUser = createUser;
//
// module.exports = UserModel;
//
// function createUser(user) {
//   return UserModel.create(user);
// }
var mongoose = require('mongoose');
var UserSchema = require('./user.schema.server.js');
var User = mongoose.model('User', UserSchema);

User.createUser = createUser;
User.findUserById = findUserById;
User.findUserByUsername = findUserByUsername;
User.findUserByCredentials = findUserByCredentials;
User.updateUser = updateUser;
User.deleteUser = deleteUser;

module.exports = User;

function createUser(user) {
  return User.create(user);
}

function findUserById(userId) {
  return User.findById(userId);
}

function findUserByUsername(username) {
  return User.findOne({ username: username });
}

function findUserByCredentials(username, password) {
  return User.findOne({ username: username, password: password });
}

function updateUser(userId, user) {
  return User.findByIdAndUpdate(userId, user);
}

function deleteUser(userId) {
  return User.findByIdAndRemove(userId);
}
