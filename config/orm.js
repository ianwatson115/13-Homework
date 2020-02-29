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
    updateOne: function(table, cols, condition) {
      var queryString = "UPDATE " + table;
  
      queryString += " SET ";
      queryString += cols;
      queryString += " WHERE ";
      queryString += condition;
  
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        console.table(result);
      });
    }
  };
    // console.table(orm.updateOne("burgers", "burger_name = \"Five Guys\"", "id = 4",));
//   console.table(orm.all("burgers"));
// console.table(orm.insertOne("burgers", "burger_name, devoured", "\"m20\"", "true"));
  
module.exports = orm;
  