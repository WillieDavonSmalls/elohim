// Import MySQL connection.
var connection = require("../config/connection.js");

//npm packages
var mysql = require("mysql");

var newBurger;
var devoured; 
// var available_burgers = [];

var orm = {
    devouredSQLfncn: function(callback) {
      var queryString = "SELECT CONCAT(id, '. ', burger_name) burger_name FROM burgers WHERE devoured = 1";  
      
      connection.query(queryString, function(error, result) {
        // connection.end();
          if (error) return callback(error);
      
          callback(result);
      });
      },
 
      availableSQLfncn: function(callback) {
        var queryString = "SELECT CONCAT(id, '. ', burger_name) burger_name, id FROM burgers WHERE devoured = 0";  
        
        connection.query(queryString, function(error, result) {
          // connection.end();
            if (error) return callback(error);
        
            // for(var i = 0; i<result.length; i++){
            //   available_burgers.push(result[i].burger_name);
            // }
            // console.log('available')
            // console.log(available_burgers);
            //  return available_burgers;

            callback(result);
        });

            // console.log(available_burgers);
            // var x = {"hello": "susan"}
            // callback(x);
      },

      InsertBurgerSQLfncn: function(burgerName) {
        var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?,0)";
        connection.query(queryString, [burgerName], function(error, result) {
          // connection.end();
            if (error) throw error;
            console.log("Number of records inserted: " + result.affectedRows);
        });
      },

      UpdateBurgerSQLfncn: function(burgerID) {
        var queryString = "update burgers set devoured = 1 WHERE id = ?";
        connection.query(queryString, [burgerID], function(error, result) {
          // connection.end();
            if (error) throw error;
            console.log("Number of records updated: " + result.affectedRows);
        });
      },

};

// Export the orm object for the model (cat.js).
module.exports = orm;

