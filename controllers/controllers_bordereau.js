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
    console.log(data);
  });
});

router.get("/api/all", function(request, result) {

  models.All(function(data) {
  // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
  result.send(data);
  console.log(data);
});
});


router.post("/api/searchaccount", function(request, result) {

  models.searchAccounts(request.body.account,function(data) {
  // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
  console.log('hello', request.body.account);
  result.send(data);
  console.log(data);
});
});

router.post("/api/extractaccount", function(request, result) {

  models.selectAccount(request.body.bordereauid,function(data) {
  // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
  console.log('hello', request.body.bordereauid);
  result.send(data);
  console.log(data);
});
});

// Export routes for server.js to use.
module.exports = router;