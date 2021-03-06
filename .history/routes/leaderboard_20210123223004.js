const express = require('express');
const User = require("../models/user")
const Store = require("../models/Store")

const router = express.Router();

router.get('/leaderboard', function(req, res){
    Store.find().then(function(doc){
        console.log(doc)
        res.render("leaderboard", doc)
    }).catch((err) => {
        console.log(err)
    })
});

module.exports = router