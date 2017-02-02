const express = require('express');
const app = express();
const path = require('path');

app.listen(process.env.PORT || 3000, function(){
  console.log('Listening on port: 3000');
});

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('pages/index');
});
app.get('/gallery', function(req, res){
  res.render('pages/gallery');
});

app.use(express.static('client'));
app.use(express.static('pictures'));
