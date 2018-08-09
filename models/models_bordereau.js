const mysql = require("mysql");
const connection = require("../config/connection.js");

var bordereauid = '870';
var models = {

  allAccounts: function(callback) {
    var queryString = 
    `select BORDEREAUID, STATUS, DATE_FORMAT(SUBMITDATE, "%W %M %e %Y") as SUBMITDATE,  INSUREDNAME 
    from tblbordereau order by SUBMITDATE desc;`; 
    
    connection.query(queryString, function(error, result) {
      // connection.end();
        if (error) return callback(error);

        // console.log(result);
        callback(result);
    });
  
  },

  searchAccounts: function(accountname, callback) {
    var queryString = 
    `select BORDEREAUID, STATUS, DATE_FORMAT(SUBMITDATE, "%W %M %e %Y") as SUBMITDATE,  INSUREDNAME 
    from tblbordereau 
    where INSUREDNAME like '%${accountname}%'
    order by SUBMITDATE desc;`; 
    
    connection.query(queryString, function(error, result) {
      // connection.end();
        if (error) return callback(error);

        // console.log(result);
        callback(result);
    });
  
  },

  selectAccount: function(bordereauid, callback) {
    var queryString =  
    `SELECT tblbordereau.BORDEREAUID, STATUS, SubmitDate, InsuredName, ProgramAdministrator, PolicyNumber, EffectiveDate, ExpirationDate, 
    StatusCode, TransactionDate, StreetAddress, City, County, State, Zip, OccupiedBy, ConstructionType, YearBuilt, YearRefurbished, 
    SqFootage, PrimaryFloodCoveredFlag, WSDedPerc, AOPDed, EQDedPerc, HOCovLim_A, HOCovLim_B, HOCovLim_C, HOCovLim_D, HOCovLim_E, HOCovLim_F,
    RoofAge, RoofType, OpeningProtection,  RoofConnection, RoofSheathing, COMMENTS
    FROM tblbordereau left join tblcomments on tblbordereau.BORDEREAUID = tblcomments.BORDEREAUID
    where tblbordereau.BORDEREAUID = ${bordereauid}`;
    connection.query(queryString, function(error, result) {
      // connection.end();
        if (error) return callback(error);

        // console.log(result);
        callback(result);
    });
  
  },

  All: function(callback) {
    var queryString =  
    `SELECT tblbordereau.BORDEREAUID, STATUS, SubmitDate, InsuredName, ProgramAdministrator, PolicyNumber, EffectiveDate, ExpirationDate,
    StatusCode, TransactionDate, StreetAddress, City, County, State, Zip, OccupiedBy, ConstructionType, YearBuilt, NumStories,YearRefurbished, 
    SqFootage, PrimaryFloodCoveredFlag, WSDedPerc, AOPDed, EQDedPerc, HOCovLim_A, HOCovLim_B, HOCovLim_C, HOCovLim_D, HOCovLim_E, HOCovLim_F,
    RoofAge, RoofType, OpeningProtection,  RoofConnection, RoofSheathing, COMMENTS
    FROM tblbordereau left join tblcomments on tblbordereau.BORDEREAUID = tblcomments.BORDEREAUID
    order by SUBMITDATE desc`;
    connection.query(queryString, function(error, result) {
      // connection.end();
        if (error) return callback(error);

        // console.log(result);
        callback(result);
    });
  
  }
}


//missing aggregation query and search
// models.allAccounts();
// models.selectAccount(bordereauid); 

// Export the models
module.exports = models;

