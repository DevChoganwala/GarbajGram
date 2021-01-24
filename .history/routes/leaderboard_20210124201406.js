const express = require('express');
const { getUsers} = require('../controllers/users');
const User = require("../models/user")
const router = express.Router();
router
  .route('/api/v1/users')
  .get(getUsers)

router.get('/leaderboard', function(req, res){
    User.find().then(function(doc){
        /*for (const property in doc){
            console.log(`${property}: ${object[property]}`)
        }*/
        for (item in doc){
            item.__v = 100;
        }
        res.render("leaderboard", {docs: doc})
    }).catch((err) => {
        console.log(err)
    })
});

module.exports = router