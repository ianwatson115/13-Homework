const orm = require("../config/orm");

const burger = {
    all: () => {
        orm.all("burgers", (res) => {
            return res;
        });
    },

    insertOne: (cols, vals, boolVal) => {
        orm.insertOne("burgers", cols, vals, boolVal, (res) => {
            return res;
        });
    },

    updateOne: (cols, condition) => {
        orm.updateOne("burgers", cols, condition, (res) => {
            return res;
        });
    }
};
// console.table(burger.all());
// console.log(burger.insertOne("burger_name, devoured", "\"philly burger\"", "true"))
// console.log(burger.updateOne("burger_name = \"All About Burger\"", "id = 4"));
module.exports = burger;