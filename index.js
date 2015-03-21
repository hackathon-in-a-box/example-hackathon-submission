var express = require('express');

var app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('index');
});

app.listen(process.env.PORT || 3000, function(){
    console.log('DEATH RACE 3000!');
});
