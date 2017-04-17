//=========================
//Server.js
//=========================
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var methodOverride = require('method-override');


//=========================
// MIDDLEWARE
//=========================
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(session({
  secret: "feedmeseymour", //some random string
  resave: false,
  saveUninitialized: false
}));

//=========================
// CONTROLLERS
//=========================
var usersController = require('./controllers/users.js');
app.use('/users', usersController);

var sessionsController = require('./controllers/sessions.js');
app.use('/sessions', sessionsController);

var recipesController = require('./controllers/recipes.js');
app.use('/recipes', recipesController);

//=========================
// ROUTES
//=========================

// HOME PAGE
app.get('/', function(req, res) {
  res.render('index.ejs', {
    currentUser: req.session.currentuser
  });
})

// SPECIAL ROUTE/PAGE
app.get('/app', function(req, res){
  if (req.session.currentuser !== undefined) { // Disallow Users Not Logged In From entering "Special" Page
    res.send('the party');
  } else {
    res.redirect('/');
  }
});

// START MONGO
mongoose.connect('mongodb://localhost:27017/project2');
mongoose.connection.once('open', function(){
    console.log('connected to mongo');
});

app.listen(3000, function() {
  console.log('listening');
});
