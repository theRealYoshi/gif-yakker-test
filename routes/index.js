var express = require('express');
var browserify = require('browserify');
var React = require('react');
var jsx = require('node-jsx');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { name: 'John' });
});

/* GET api request from giphy page. */
router.get('/api/gif', function(req, res) {
    // check redis cache first if not there
    // makes call to giphy api anagramized
    // resets cache
    request("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=dc6zaTOxFJmzC&limit=5",function(error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body) // Show the HTML for the Google homepage.
      }
    });
    // console.log(xhr);
    // xhr.done(function(data) { console.log("success got data", data); });
    //res.render('users', {"users": data});
});


//
// /* GET Hello World page. */
// router.get('/helloworld', function(req, res) {
//     res.render('helloworld', { title: 'Hello, World!' });
// });
//
// /* GET Userlist page. */
// router.get('/userlist', function(req, res) {
//     var db = req.db;
//     var collection = db.get('usercollection');
//     collection.find({},{},function(e,docs){
//         res.render('userlist', {
//             "userlist" : docs
//         });
//     });
// });
//
// /* GET New User page. */
// router.get('/newuser', function(req, res) {
//     res.render('newuser', { title: 'Add New User' });
// });
//
// /* POST to Add User Service */
// router.post('/adduser', function(req, res) {
//
//     // Set our internal DB variable
//     var db = req.db;
//
//     // Get our form values. These rely on the "name" attributes
//     var userName = req.body.username;
//     var userEmail = req.body.useremail;
//
//     // Set our collection
//     var collection = db.get('usercollection');
//
//     // Submit to the DB
//     collection.insert({
//         "username" : userName,
//         "email" : userEmail
//     }, function (err, doc) {
//         if (err) {
//             // If it failed, return error
//             res.send("There was a problem adding the information to the database.");
//         }
//         else {
//             // And forward to success page
//             res.redirect("userlist");
//         }
//     });
// });

module.exports = router;
