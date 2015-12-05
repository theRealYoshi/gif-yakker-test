var express = require('express');
var browserify = require('browserify');
var React = require('react');
var jsx = require('node-jsx');
var router = express.Router();

/* GET api request from giphy page. */
router.get('/api/gif', function(req, res) {
    console.log("jfdakfjdasklfdjsaklfsj");
    // check redis cache first if not there
    // makes call to giphy api anagramized
    // resets cache
    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=dc6zaTOxFJmzC&limit=5");
    xhr.done(function(data) { console.log("success got data", data); });
    //res.render('users', {"users": data});
});

module.exports = router;
