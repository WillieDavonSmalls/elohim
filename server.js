const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;
const cors = require("cors");

// Import routes and give the server access to them.
const routes = require("./controllers/controllers_bordereau.js");


// Define middleware here
app.use(cors()) //allow cross origin request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)

app.use(express.static("client/build"));

app.use(routes);



app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});