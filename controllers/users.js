//==================
// USER CONTROLLER
//==================
var express = require('express');
var router = express.Router();
var User=require('../models/users.js')

// 1) NEW ROUTE / Create User New Page
router.get('/new', function(req, res) {
  res.render('users/new.ejs')
});

// 2) CREATE ROUTE | Create User Create Route
router.post('/', function(req, res){
  User.create(req.body, function(err, createdUser){
      res.redirect('/');
  });
});


module.exports = router;
