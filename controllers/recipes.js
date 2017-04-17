//=========================
// RECIPES CONTROLLER
//=========================
var express = require('express');
var router = express.Router();
var Recipe = require('../models/recipes.js');

// 1) RECIPES INDEX ROUTE
router.get('/', function(req, res) {
  Recipe.find({}, function(err, foundRecipes) {
    res.render('recipes/index.ejs', {
      recipes: foundRecipes
    });
  });
});


module.exports = router;
