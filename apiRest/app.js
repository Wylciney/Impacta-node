var express = require('express');
var load = require('express-load');

var app = express();
var bodyParser= require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/contatos');

load('models')
.then('controllers')
.then('routes')
.into(app);

app.listen(3000, () => {
  console.log('servidor no ar!');
});