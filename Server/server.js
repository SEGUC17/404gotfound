

var express = require('express');
var router = require('./app/routes');
var bodyParser = require('body-parser');
var expressValidator = require ('express-validator');
var stripe = require("stripe")("sk_test_AxrSsRJdvQ5DgIlN5EURlfzW");
var hbs = require("hbs");
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

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT,  DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

mongoose.connect(DB_URI);

app.use(router);



app.listen(3000, function(){
    console.log("server is listening on port 3000");
})

