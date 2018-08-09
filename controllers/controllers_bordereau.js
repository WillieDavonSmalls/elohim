var express = require("express");

var router = express.Router();

// Import the model (burger_models.js) to use its database functions.
var models = require("../models/models_bordereau.js");


// var connection = require("../config/connection.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(request, result) {
  result.render("index");
});

//returns all accounts,displayed on the left sidebar
router.get("/api/allaccounts", function(request, result) {
    models.allAccounts(function(data) {
    result.send(data);
    // console.log(data);
  });
});

//returns accounts matching on name only,displayed on the left sidebar
router.post("/api/searchaccount", function(request, result) {
  models.searchAccounts(request.body.account,function(data) {
    // console.log('hello', request.body.account);
    result.send(data);
    // console.log(data);
  });
});

//Extracts full account information  for single account after on click of row in left sidebar, for main page
router.post("/api/extractaccount", function(request, result) {
  models.selectAccount(request.body.bordereauid,function(data) {
  // console.log('hello', request.body.bordereauid);
  result.send(data);
  // console.log(data);
  });
});

//Extracts full account information  for single account after on click of row in left sidebar, for main page
router.post("/api/validatelogin", function(request, result) {
  console.log(request.body.usercredentials)
  // console.log(request.body.usercredentials.username, request.body.usercredentials.password);
  models.userLogin(request.body.usercredentials, function(data) {
    
    // result.send(data);

    var validation; 
    for(var key in data[0]) { validation = data[0][key]; }

    if (validation === 1){
      validation = true; 
    } else {validation = false;}

    validation = {validation: validation};
    console.log(validation);

    result.send(validation);

  });
});

//returns all accounts, full data
router.get("/api/all", function(request, result) {
  models.All(function(data) {
  result.send(data);
  // console.log(data);
  });
});

//Extracts full account information  for single account after on click of row in left sidebar, for main page
router.post("/api/extractcomments", function(request, result) {
  models.selectAccount(request.body.bordereauid,function(data) {
  // console.log('hello', request.body.bordereauid);
  result.send(data);
  // console.log(data);
  });
});

// Export routes for server.js to use.
module.exports = router;