var express = require('express');
var load = require('express-load');
var app = express();
const mongoose = require ('mongoose')

app.set('views', __dirname + "/views");
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));

global.db = mongoose.connect('mongodb://localhost:27017/dbusuarios')

mongoose.connection.on('connected', function(){
    console.log('=====Conexão estabelecida com sucesso=====');
});
mongoose.connection.on('error',function(err){
    console.log(`=====Ocorreu um erro:${error}=====`);
});
mongoose.connection.on('disconnected',function (){
    console.log('=====Conexão terminada=====');
});

app.get('/exemplo', function(requisicao, resposta){
    resposta.render("exemplos/app");
});

load('models') 
.then('controllers')
.then('routes')
.into(app)

app.listen(3000, function(){
    console.log("Servidor iniciado com sucesso!");
});