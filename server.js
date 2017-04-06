

var express = require('express');
var router = require('./app/routes');
var bodyParser = require('body-parser');
var expressValidator = require ('express-validator');
var path = require('path');
var mongoose = require('mongoose');
var DB_URI = "mongodb://localhost:27017/portfolio";
var app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:false}));

app.set('views', path.join(__dirname , 'views'));

app.use(bodyParser.json());
app.use(express.static(__dirname+ '/public'));

mongoose.connect(DB_URI);
app.use(router);



// start the server
app.listen(3000, function(){
    console.log("server is listening on port 3000");
})

