//=========================
// USER CONTROLLER
//=========================
var express = require('express');
var router = express.Router();
var User = require('../models/users.js')
var bcrypt = require('bcrypt');

//=========================
// ROUTES
//=========================

// 1) NEW ROUTE / Create User New Page
router.get('/new', function(req, res) {
  res.render('users/new.ejs')
});

// 3) INDEX ROUTE
router.get('/', function(req, res) {
  User.find({}, function(err, foundUsers) {
    res.render('users/index.ejs', {
      users: foundUsers
    })
  })
})

// 2) CREATE ROUTE | Create user data in DataBase
router.post('/', function(req, res){
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)); // Encrypt Password On Create User
  User.create(req.body, function(err, createdUser){
    res.redirect('/');
  });
});


module.exports = router;
