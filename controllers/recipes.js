//=========================
// RECIPES CONTROLLER
//=========================
var express = require('express');
var router = express.Router();

router.get('/', function() {
  res.render('recipes/index.ejs');
});


module.exports = router;
