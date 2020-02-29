const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

console.log(router);

router.get("/", (req, res) => {
    burger.all((data) => {
        var burgObject = {
            burgers: data
        };
        console.log(burgObject);
        res.render("index", burgObject);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.insertOne(["burger_name, devoured"], [
      req.body.cols
    ], (result) => {
      res.json({ id: result.insertId });
    });
  });

module.exports = router;