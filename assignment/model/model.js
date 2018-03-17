var mongoose = require('mongoose');

// this is haruko conncection
// var db = mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds263847.mlab.com:63847/heroku_khn0t993');
var db = mongoose.connect('mongodb://localhost:27017/webdev', {useMongoClient: true});
