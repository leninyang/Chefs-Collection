//=========================
// RECIPES CONTROLLER
//=========================
var express = require('express');
var router = express.Router();
var Recipe = require('../models/recipes.js');

//=========================
// ROUTES
//=========================

// 2) RECIPES NEW ROUTE | CREATE NEW RECIPES
router.get('/new', function(req, res) {
  res.render('recipes/new.ejs');
});

// 1) RECIPES INDEX ROUTE
router.get('/', function(req, res) {
  Recipe.find({}, function(err, foundRecipes) {
    res.render('recipes/index.ejs', {
      recipes: foundRecipes
    });
  });
});


module.exports = router;
