

var express = require('express');
var router = require('./app/routes');
var bodyParser = require('body-parser');
var expressValidator = require ('express-validator');


var path = require('path');
var mongoose = require('mongoose');
var DB_URI = "mongodb://localhost:27017/portfolio";


var app = express();


app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(__dirname+ '/public'));


app.use(function(req, res, next) {


    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);


    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT,  DELETE');


    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');


    res.setHeader('Access-Control-Allow-Credentials', true);


    next();
});

mongoose.connect(DB_URI);

app.use(router);



app.listen(3000, function(){
    console.log("server is listening on port 3000");
})
