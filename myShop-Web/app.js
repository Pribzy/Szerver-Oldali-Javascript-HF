var express = require('express');
var app = express();



app.use(express.static('static'));


//Middlewares
const authMW = require('../middlewares/auth')

module.exports = function(app){

    const objRepo  = {}

    //Route-ok
    //GET: app.get
    //POST:app.post
}

var server = app.listen(3000,function(){
    console.log("Server On: 3000");
});