//====================
//Server.js
//====================
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//====================
// MIDDLEWARE
//====================
app.use(bodyParser.urlencoded({extended:false}));

//====================
// CONTROLLERS
//====================
var usersController = require('./controllers/users.js');
app.use('/users', usersController);
var sessionsController = require('./controllers/sessions.js');
app.use('/sessions', sessionsController)

//====================
// ROUTES
//====================

// HOME PAGE
app.get('/', function(req, res) {
  res.render('index.ejs')
})

app.listen(3000, function() {
  console.log('listening');
});
