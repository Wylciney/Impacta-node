module.exports = function (app) {
   
const mongoose = require('mongoose')

    var usuario = mongoose.Schema({
        nome:{type:String, require: true},
        email:{type:String, require: true}
    });
    return mongoose.model('usuarios',usuario);
}