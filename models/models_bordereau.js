const mysql = require("mysql");
const connection = require("../config/connection.js");

var bordereauid = '870';
var models = {

  //returns all accounts,displayed on the left sidebar
  allAccounts: function(callback) {
    var queryString = 
    `select BORDEREAUID, STATUS, DATE_FORMAT(SUBMITDATE, "%W %M %e %Y") as SUBMITDATE,  INSUREDNAME 
    from tblbordereau order by SUBMITDATE desc;`; 
    
    connection.query(queryString, function(error, result) {
        if (error) return callback(error);
        callback(result);
    });
  },

//returns accounts matching on name only,displayed on the left sidebar
  searchAccounts: function(accountname, callback) {
    var queryString = 
    `select BORDEREAUID, STATUS, DATE_FORMAT(SUBMITDATE, "%W %M %e %Y") as SUBMITDATE,  INSUREDNAME 
    from tblbordereau 
    where INSUREDNAME like '%${accountname}%'
    order by SUBMITDATE desc;`; 
    
    connection.query(queryString, function(error, result) {
        if (error) return callback(error);
        callback(result);
    });
  },

//Extracts full account information  for single account after on click of row in left sidebar, for main page
  selectAccount: function(bordereauid, callback) {
    var queryString =  
    `SELECT tblbordereau.BORDEREAUID, STATUS, SubmitDate, InsuredName, ProgramAdministrator, PolicyNumber, 
    DATE_FORMAT(EffectiveDate, "%W %M %e %Y") EffectiveDate, DATE_FORMAT(ExpirationDate, "%W %M %e %Y") ExpirationDate, 
    StatusCode, DATE_FORMAT(TransactionDate, "%W %M %e %Y") TransactionDate, StreetAddress, City, County, State, Zip, OccupiedBy, ConstructionType, YearBuilt, YearRefurbished, NumStories,
    format(SqFootage, 0) SqFootage, PrimaryFloodCoveredFlag, WSDedPerc, concat('$', format(AOPDed, 0)) AOPDed, EQDedPerc, 
    concat('$', format(HOCovLim_A, 0)) HOCovLim_A, concat('$', format(HOCovLim_B, 0)) HOCovLim_B, 
    concat('$', format(HOCovLim_C, 0)) HOCovLim_C, concat('$', format(HOCovLim_D, 0)) HOCovLim_D, 
    concat('$', format(HOCovLim_E, 0)) HOCovLim_E, concat('$', format(HOCovLim_F, 0)) HOCovLim_F, 
    RoofAge, RoofType, OpeningProtection,  RoofConnection, RoofSheathing
    FROM tblbordereau
    where tblbordereau.BORDEREAUID = ${bordereauid}`; 
    connection.query(queryString, function(error, result) {
        if (error) return callback(error);
        callback(result);
    });
  },


  //returns all accounts, full data
  All: function(callback) {
    var queryString =  
    `SELECT tblbordereau.BORDEREAUID, STATUS, SubmitDate, InsuredName, ProgramAdministrator, PolicyNumber, EffectiveDate, ExpirationDate,
    StatusCode, TransactionDate, StreetAddress, City, County, State, Zip, OccupiedBy, ConstructionType, YearBuilt, NumStories,YearRefurbished,
    SqFootage, PrimaryFloodCoveredFlag, WSDedPerc, AOPDed, EQDedPerc, HOCovLim_A, HOCovLim_B, HOCovLim_C, HOCovLim_D, HOCovLim_E, HOCovLim_F,
    RoofAge, RoofType, OpeningProtection,  RoofConnection, RoofSheathing, COMMENTS
    FROM tblbordereau left join tblcomments on tblbordereau.BORDEREAUID = tblcomments.BORDEREAUID
    order by SUBMITDATE desc`;
    connection.query(queryString, function(error, result) {
        if (error) return callback(error);
        callback(result);
    });
  },

  //login
  userLogin: function(usercredentials, callback) {

    var username = usercredentials.username;
    var userpassword = usercredentials.password; 
    var queryString = `SELECT EXISTS(select 1 from tbluserauth where user = '${username}' and user_password = '${userpassword}')`
    // console.log(queryString);
    connection.query(queryString, function(error, rows){
      // console.log(queryString);
      if (error) return callback(error);
      // console.log('models', rows);
      callback(rows);
    })
  },

  //Extracts full account information  for single account after on click of row in left sidebar, for main page
  selectComments: function(bordereauid, callback) {
    var queryString =  
    `SELECT BORDEREAUID, COMMENTS
    FROM tblcomments
    where tblcomments.BORDEREAUID = ${bordereauid}`; 
    connection.query(queryString, function(error, result) {
        if (error) return callback(error);
        callback(result);
    });
  },

    //Extracts full account information  for single account after on click of row in left sidebar, for main page
    advancedSearch: function(dates, callback) {
      var start_date = dates.start_date; 
      var end_date = dates.end_date; 
      
      var queryString =  
      `SELECT tblbordereau.BORDEREAUID, STATUS, SubmitDate, InsuredName, ProgramAdministrator, PolicyNumber, EffectiveDate, ExpirationDate, 
      StatusCode, TransactionDate, StreetAddress, City, County, State, Zip, OccupiedBy, ConstructionType, YearBuilt, NumStories, YearRefurbished, 
      SqFootage, PrimaryFloodCoveredFlag, WSDedPerc, AOPDed, EQDedPerc, HOCovLim_A, HOCovLim_B, HOCovLim_C, HOCovLim_D, HOCovLim_E, 
      concat('$', format(HOCovLim_F,0)),
      RoofAge, RoofType, OpeningProtection,  RoofConnection, RoofSheathing, COMMENTS
      FROM tblbordereau left join tblcomments on tblbordereau.BORDEREAUID = tblcomments.BORDEREAUID
      where SubmitDate > '${start_date}' and SubmitDate < '${end_date}'
      order by SUBMITDATE desc;`; 
      connection.query(queryString, function(error, result) {
          if (error) return callback(error);
          callback(result);
      });
    },

}




// Export the models
module.exports = models;

