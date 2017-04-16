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

// 1) USERS NEW ROUTE / Create User New Page
router.get('/new', function(req, res) {
  res.render('users/new.ejs')
});

// 3) USERS INDEX ROUTE
router.get('/', function(req, res) {
  User.find({}, function(err, foundUsers) {
    res.render('users/index.ejs', {
      users: foundUsers
    });
  });
});

// 4) USERS SHOW PAGE
router.get('/:id', function(req, res) {
  User.findById(req.params.id, function(err, foundUser) {
    res.render('users/show.ejs', {
      user: foundUser
    });
  });
});

// 6) EDIT ROUTE
router.get('/:id/edit', function(req, res) {
  User.findById(req.params.id, function(err, foundUser) {
    res.render('users/edit.ejs', {
      user: foundUser
    });
  });
});


// 2) CREATE ROUTE | Create user data in DataBase
router.post('/', function(req, res){
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)); // Encrypt Password On Create User
  User.create(req.body, function(err, createdUser){
    res.redirect('/');
  });
});

// 5) DELETE ROUTE
router.delete('/:id', function(req, res) {
  User.findByIdAndRemove(req.params.id, function() {
    res.redirect('/users')
  });
});

module.exports = router;
