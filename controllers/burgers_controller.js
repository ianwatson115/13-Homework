const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

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

router.put("/api/burgers/:id", (req,res) => {
    var condition = "id = " + req.params.id;
    var cols = "burger_name = " + req.params.cols;
    burger.updateOne(cols, condition, (result) => {
        res.json({ cols: result.cols})
    });
});


module.exports = router;