var express = require('express');
var app = express();
var jquery = require('jquery');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('home');
});

app.get('/about', function(req, res){
  res.render('about');
});

app.get('/map/car/:id', function(req, res){
  // var input_address = $("#inputAddress").val();
  res.render('car');
});

app.get('/map/bike/:id', function(req, res){
  res.render('bike');
});

app.get('/map/bus/:id', function(req, res){
  res.render('bus');
});

app.get('/map/walk/:id', function(req, res){
  res.render('walk');
});

app.get('/map', function(req, res){
  res.render('map');
});




// app.get('/search/', function(req, res){
//     console.log('search get')
//     var request = require('request');
//     var query = req.query.query
//     var time = req.query.time
//     console.log(time)
// });




app.listen(process.env.PORT || 3000, function(){
    console.log('DEATH RACE 3000!');
});
