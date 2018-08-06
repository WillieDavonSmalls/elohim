var express = require("express");

var router = express.Router();

// Import the model (burger_models.js) to use its database functions.
var models = require("../models/models_bordereau.js");


// var connection = require("../config/connection.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(request, result) {
  result.render("index");
});

router.get("/api/allaccounts", function(request, result) {

    models.allAccounts(function(data) {
    // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
    result.send(data);
  });
});

// Export routes for server.js to use.
module.exports = router;