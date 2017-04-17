//require depenciess
var express = require('express');
var router = require('./app/routes');
var bodyParser = require('body-parser');
var expressValidator = require ('express-validator');
var path = require ('path');
var mongoose = require('mongoose');
var DB_URI = "mongodb://localhost:27017/se";

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// configure app
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname+ '/public'));
app.use(express.static(__dirname+ '/public'));

mongoose.connect(DB_URI);
app.use(router);


// start the server
app.listen(8080, function(){
    console.log("server is listening on port 8080");
})
