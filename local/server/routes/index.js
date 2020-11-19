const express = require('express');
const _ = require('lodash');
const router = express.Router();
var mongoose = require('mongoose');
var sanitize = require('mongo-sanitize');


require('../user.js');
var  User =  mongoose.model('User');

router.post('/signup', function (req, res) {
  var newUser = new User(req.body);

  newUser.save(function(err,data){
    if(err){
        console.log(err)
    }
    else {
      console.log('success')
    }
  })
});

router.post('/bad/login/nosql', async(req,res) => {
  var userName = req.body.userName === '{"$gte": 0}' ? {"$gte": 0} : req.body.userName;
  var password = req.body.password === '{"$gte": 0}' ? {"$gte": 0} : req.body.password;

  try {
    User.findOne({userName: userName, password: password}, (err,data) => {
      if(err) res.sendStatus(500);
      else if(data) res.json(data);
      else console.log('Wrong Username Password Combination');
    })
  }
  catch (error) {
    console.log(error)
    res.sendStatus(500);
  }
});

router.post('/good/login/nosql', async (req,res) => {
  var userName = req.body.userName === '{"$gte": 0}' ? {"$gte": 0} : req.body.userName;
  var password = req.body.password === '{"$gte": 0}' ? {"$gte": 0} : req.body.password;

  try {
    User.findOne({userName: sanitize(userName), password: sanitize(password)}, (err,data) => {
      if(err) res.sendStatus(500);
      else if(data) res.json(data);
      else console.log('Wrong Username Password Combination');
    })
  }
  catch (error) {
    console.log(error)
    res.sendStatus(500);
  }
});

module.exports = router;