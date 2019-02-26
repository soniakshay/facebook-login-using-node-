var passport = require('passport')
  , FacebookStrategy = require('passport-facebook').Strategy;
  
  var express=require('express');
  var request = require("request")

  var app= express();


// var component= require('./route');
// app.use('/',component);

var User;
  passport.use(new FacebookStrategy({
    clientID:,
    clientSecret:'',
    callbackURL: "http://localhost:3000"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({}, function(err, user) {
      if (err) { return done(err); }
      done(null, user);
  
    });
  }
));


app.get('/auth/facebook',
  passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });



  app.get('/',function(req,res){
  
    res.send('success');
  });
app.listen(3000);



module.exports=app;
