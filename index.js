var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('home');
});

app.get('/about', function(req, res){
  res.render('about');
});

app.get('/map/car', function(req, res){
  res.render('car');
});

app.get('/map/bike', function(req, res){
  res.render('bike');
});

app.get('/map/bus', function(req, res){
  res.render('bus');
});

app.get('/map/walk', function(req, res){
  res.render('walk');
});

app.get('/map', function(req, res){
  res.render('map');
});


app.listen(process.env.PORT || 3000, function(){
    console.log('DEATH RACE 3000!');
});
