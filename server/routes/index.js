const express = require('express');
const db = require('../db');
const _ = require('lodash');
const router = express.Router();

router.post('/bad/user/nosql', async (req, res, next) => {
  try {
    var {userName, password} = req.body;
    var collection = db.getCollection();

    collection.findOne({name: userName, password: password}, function(err,data){
        if(err) {
          console.log(error)
          res.sendStatus(500);
        }  
        else if(data){
            console.log(data)
        }
        else {
          console.log('Wrong Username Password Combination');
        }
    })
  }
  catch(error) {
    console.log(error)
  }
});

router.post('/good/user/nosql', async (req, res, next) => {
  try {
    var {userName, password} = req.body;
    var collection = db.getCollection();

    collection.findOne({name: userName, password: password}, function(err,data){
        if(err) {
          console.log(error)
          res.sendStatus(500);
        }  
        else if(data){
            console.log(data)
        }
        else {
          console.log('Wrong Username Password Combination');
        }
    })
  }
  catch(error) {
    console.log(error)
  }
});

module.exports = router;