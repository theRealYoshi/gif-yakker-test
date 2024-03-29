var express = require('express');
var browserify = require('browserify');
var React = require('react');
var jsx = require('node-jsx');
var request = require('request');
var router = express.Router();

/* GET api request from giphy page. */
router.get('/gif', function(req, res) {
    // check redis cache first if not there
    // makes call to giphy api anagramized
    // resets cache
    makeGiphyCall(function(result){
      console.log(result); // return
    });
    //res.render('users', {"users": data});
});



var makeGiphyCall = function(callback){
  var data;
  request.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=dc6zaTOxFJmzC&limit=5",function(error, response, body) {
    console.log("running");
    if (!error && response.statusCode == 200) {
      callback(body); // Show the HTML for the Google homepage.
    } else {
      callback(error);
    }
  });

}



module.exports = router;
