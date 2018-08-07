const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;

// Import routes and give the server access to them.
const routes = require("./controllers/controllers_bordereau.js");

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)

app.use(express.static("client/build"));

app.use(routes);


// // Send every other request to the React app
// // Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});