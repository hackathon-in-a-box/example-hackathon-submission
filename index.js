var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('home');
});

app.get('/map', function(req, res){
  res.render('map');
});

app.listen(process.env.PORT || 3000, function(){
    console.log('DEATH RACE 3000!');
});
