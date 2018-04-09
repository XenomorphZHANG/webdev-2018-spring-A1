// module.exports = function (app) {
//     app.post("/api/user", createUser);
//     app.get("/api/user", findUser);
//     // app.get("/api/user?username=username", findUserByUsername);
//     // app.get("/api/user?username=username&password=password", findUserByCredentials);
//     app.get("/api/user/:userId", findUserById);
//     app.put("/api/user/:userId", updateUser);
//     app.delete("/api/user/:userId", deleteUser);
// //
//     var users = [
//         { _id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonderland" },
//         { _id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley" },
//         { _id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia" },
//         { _id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi" }
//     ];
//
//     function createUser(req, res) {
//         var user = req.body;
//         for (var x = 0; x < users.length; x++) {
//             if (users[x].username === user["username"]) {
//                 res.status(404).send("This username is already exist.");
//                 return;
//             }
//         }
//
//         user._id = Math.random().toString();
//         users.push(user);
//         res.json(user);
//     };
//
//     function findUser(req, res) {
//         if (req.query["password"]) {
//             findUserByCredentials(req, res);
//         } else {
//             findUserByUsername(req, res);
//         }
//     }
//
//     function findUserByUsername(req, res) {
//         var username = req.query["username"];
//         for (var i = 0; i < users.length; i++) {
//             if (users[i].username === username) {
//                 res.json(users[i]);
//                 return;
//             }
//         }
//         res.status(404).send("Cannot find user with username: " + username);
//     };
//
//     function findUserByCredentials(req, res) {
//         var username = req.query["username"];
//         var password = req.query["password"];
//         for (var i = 0; i < users.length; i++) {
//             if (users[i].username === username && users[i].password === password) {
//                 res.json(users[i]);
//                 return;
//             }
//         }
//         res.status(404).send("Username and password did not match.");
//     }
//
//     function findUserById(req, res) {
//         var userId = req.params["userId"];
//         for (var i = 0; i < users.length; i++) {
//             if (users[i]._id === userId) {
//                 res.json(users[i]);
//                 return;
//             }
//         }
//         res.status(404).send("Cannot find user with user ID: " + userId);
//     };
//
//     function updateUser(req, res) {
//         var userId = req.params["userId"];
//         var updatedUser = req.body;
//
//         console.log("update user: " + userId + " " + updatedUser["firstName"] + " " + updatedUser["lastName"]);
//         for (var i = 0; i < users.length; i++) {
//             if (users[i]._id === userId) {
//                 users[i].firstName = updatedUser["firstName"];
//                 users[i].lastName = updatedUser["lastName"];
//                 users[i].emailAddress = updatedUser["emailAddress"];
//
//                 res.json(updatedUser);
//                 return;
//             }
//         }
//         res.status(404).send("User not found!");
//     };
//
//     function deleteUser(req, res) {
//         var userId = req.params["userId"];
//         for (var x = 0; x < users.length; x++) {
//             if (users[x]._id === userId) {
//                 res.json(users[x]);
//                 users.splice(x, 1);
//                 return;
//             }
//         }
//         res.status(404).send("User cannot be found!");
//     };
// }

// var passport = require('passport');
// var LocalStrategy = require('passport-local').Strategy;
// var FacebookStrategy = require('passport-facebook').Strategy;
// var bcrypt = require("bcrypt-nodejs");
//
// module.exports = function (app) {
//   app.post("/api/user", createUser);
//   app.get("/api/user", findUser);
//   app.get("/api/user/:userId", findUserById);
//   app.put("/api/user/:userId", updateUser);
//   app.delete("/api/user/:userId", deleteUser);
//
//   var userModel = require("../model/user/user.model.server.js");
//
//   var facebookConfig = {
//     clientID     : process.env.FACEBOOK_CLIENT_ID,
//     clientSecret : process.env.FACEBOOK_CLIENT_SECRET,
//     callbackURL  : process.env.FACEBOOK_CALLBACK_URL
//   };
//
//   // var users = [
//   //     { _id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonderland" },
//   //     { _id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley" },
//   //     { _id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia" },
//   //     { _id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi" }
//   // ];
//
//   function createUser(req, res) {
//     var user = req.body;
//     userModel.createUser(user).then(
//       function (user) {
//         if (user) {
//           res.json(user);
//         } else {
//           res.sendStatus(400).send("Something went wrong");
//         }
//       },
//       function (err) {
//         res.sendStatus(400).send(err);
//       }
//     );
//   };
//
//   function findUser(req, res) {
//     if (req.query["password"]) {
//       findUserByCredentials(req, res);
//     } else {
//       findUserByUsername(req, res);
//     }
//   }
//
//   function findUserByUsername(req, res) {
//     var username = req.query["username"];
//     userModel.findUserByUsername(username).then(
//       function (user) {
//         if (user) {
//           res.json(user);
//         } else {
//           res.sendStatus(400).send("Cannot find user with the username");
//         }
//       },
//       function (err) {
//         res.sendStatus(400).send(err);
//       }
//     );
//   };
//
//   function findUserByCredentials(req, res) {
//     var username = req.query["username"];
//     var password = req.query["password"];
//     userModel.findUserByCredentials(username, password).then(
//       function (user) {
//         if (user) {
//           res.json(user);
//         } else {
//           res.sendStatus(400).send("Cannot find user with the username and password");
//         }
//       },
//       function (err) {
//         res.sendStatus(400).send(err);
//       }
//     );
//   }
//
//   function findUserById(req, res) {
//     var userId = req.params["userId"];
//     userModel.findUserById(userId).then(
//       function (user) {
//         if (user) {
//           res.json(user);
//         } else {
//           res.sendStatus(400).send("Cannot find user with the ID");
//         }
//       },
//       function (err) {
//         res.sendStatus(400).send(err);
//       }
//     );
//   };
//
//   function updateUser(req, res) {
//     var userId = req.params["userId"];
//     var updatedUser = req.body;
//     userModel.updateUser(userId, updatedUser).then(
//       function (user) {
//         if (user) {
//           res.json(user);
//         } else {
//           res.sendStatus(400).send("Cannot find user")
//         }
//       },
//       function (err) {
//         res.sendStatus(400).send(err);
//       }
//     );
//   };
//
//   function deleteUser(req, res) {
//     var userId = req.params["userId"];
//     userModel.deleteUser(userId).then(
//       function (stats) {
//         res.json(stats);
//       },
//       function (err) {
//         res.sendStatus(400).send(err);
//       }
//     );
//   };
// }


var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var bcrypt = require("bcrypt-nodejs");

module.exports = function (app) {
  var userModel = require("../model/user/user.model.server");

  var facebookConfig = {
    clientID     : process.env.FACEBOOK_CLIENT_ID,
    clientSecret : process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL  : process.env.FACEBOOK_CALLBACK_URL
  };

  app.post('/api/user', createUser);
  app.get('/api/user', findUser);
  app.get('/api/user/:userId', findUserById);
  app.put('/api/user/:userId', updateUser);
  app.delete('/api/user/:userId', deleteUser);

  //authentication api
  app.post ('/api/register', register);
  app.post ('/api/login', passport.authenticate('local'), login);
  app.post('/api/logout', logout);
  app.post ('/api/loggedIn', loggedin);

  // auth with Facebook
  app.get ('/facebook/login', passport.authenticate('facebook', { scope : 'email' }));
  app.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/profile',
    failureRedirect: '/login'
  }));

  passport.use(new LocalStrategy(localStrategy));
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);
  passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));

  function localStrategy(username, password, done) {
    userModel.findUserByUsername(username).then(
      function(user) {
        if(user && bcrypt.compareSync(password, user.password)) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      },
      function(err) {
        if (err) { return done(err);
        }
      });
  }

  function serializeUser(user, done) {
    done(null, user);
  }

  function deserializeUser(user, done) {
    userModel.findUserById(user._id).then(
      function(user){
        done(null, user);
      },
      function(err){
        done(err, null);
      }
    );
  }

  function facebookStrategy(token, refreshToken, profile, done) {
    userModel.findUserByFacebookId(profile.id)
      .then(
        function(user) {
          if(user) {
            return done(null, user);
          } else {
            var names = profile.displayName.split(" ");
            var newFacebookUser = {
              lastName:  names[1],
              firstName: names[0],
              email:     profile.emails ? profile.emails[0].value:"",
              facebook: {
                id:    profile.id,
                token: token
              }
            };
            return userModel.createUser(newFacebookUser);
          }
        },
        function(err) {
          if (err) { return done(err); }
        }
      )
      .then(
        function(user){
          return done(null, user);
        },
        function(err){
          if (err) { return done(err); }
        }
      );
  }

  /*
  var users = [
    {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonderland", email: "alice@gmail.com"},
    {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley", email: "bob@gmail.com"},
    {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia", email: "charly@gmail.com" },
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi", email: "jannunzi@gmail.com"}
  ];
  */

  function register(req, res) {
    var user = req.body;
    user.password = bcrypt.hashSync(user.password);
    userModel.findUserByUsername(user.username)
      .then(function (data) {
        if (data) {
          res.status(400).send('Username is in use!');
        } else {
          userModel.createUser(user)
            .then(function (user) {
              console.log(user);
              if (user) {
                req.login(user, function (err) {
                  if (err) {
                    res.status(400).send(err);
                  } else {
                    res.json(user);
                  }
                });
              }
            });
        }
      });
  }

  function login(req, res) {
    var user = req.user;
    res.json(user);
  }

  function logout(req, res) {
    req.logout();
    res.send(200);
  }

  function loggedin(req, res) {
    res.send(req.isAuthenticated() ? req.user : '0');
  }


  function createUser(req, res) {
    var newUser = req.body;
    userModel.createUser(newUser)
      .then(function (user) {
        res.json(user);
      })
  }

  function findUser(req, res) {
    var username = req.query["username"];
    var password = req.query["password"];
    var user = null;
    if (username && password){
      var promise = userModel.findUserByCredentials(username, password);
      promise.then(function(user) {
        res.json(user);
      });
    } else if (username) {
      userModel.findUserByUserName(username)
        .then(function(user) {
          res.json(user);
        })
    } else {
      res.status(400).send("not found!");
    }
  }

  function findUserById(req, res) {
    var userId = req.params["userId"];
    userModel.findUserById(userId).then(function (user){
      res.json(user);
    })
  }

  function updateUser(req, res) {
    var userId = req.params["userId"];
    var user = req.body;
    //console.log(req.body);
    //console.log("update user: " + userId + " " + user.firstName + " " + user.lastName);
    userModel.updateUser(userId, user)
      .then(function(status){
        res.send(status);
      })
  }

  function deleteUser(req, res) {
    var userId = req.params["userId"];
    userModel.deleteUser(userId)
      .then(function(status){
        res.send(status);
      })
  }
};
