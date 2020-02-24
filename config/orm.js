const connection = require("./connection.js");

const orm = {
    all: function(tableInput) {
      const queryString = "SELECT * FROM " + tableInput + ";";
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) throw err;
        console.table(result);
      })
    },
    insertOne: function(table, cols, val, boolVal) {
      var queryString = "INSERT INTO " + table;
  
      queryString += " (";
      queryString += cols;
      queryString += ") ";
      queryString += "VALUES (";
      queryString += val +", ";
      queryString += boolVal + ");";
  
      console.log(queryString);
  
      connection.query(queryString, val, function(err, result) {
        if (err) {
          throw err;
        }
  
        console.table(result);
      });
    },
    // An example of objColVals would be {name: panther, sleepy: true}
    update: function(table, objColVals, condition, cb) {
      const queryString = "UPDATE " + table;
  
      queryString += " SET ";
      queryString += objToSql(objColVals);
      queryString += " WHERE ";
      queryString += condition;
  
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    }
  };
  console.table(orm.all("burgers"));
//console.log(orm.insertOne("burgers", "burger_name, devoured", "\"shake shack\"", "false"));
  
  // Export the orm object for the model (cat.js).
module.exports = orm;
  