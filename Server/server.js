var express = require('express');
var router = require('./app/routes');
var bodyParser = require('body-parser');
var expressValidator = require ('express-validator');
var path = require('path');
var stripe = require("stripe")("sk_test_AxrSsRJdvQ5DgIlN5EURlfzW");
var hbs = require("hbs");
var mongoose = require('mongoose');
var morgan      = require('morgan');
var jwt    = require('jsonwebtoken');
var config = require('./config');




var app = express();

app.set('view engine', 'hbs');

app.set('views', path.join(__dirname , 'views'));

app.use(function(req, res, next) {    


    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);

   
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT,  DELETE');


    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

   
    res.setHeader('Access-Control-Allow-Credentials', true);

  
    next();
}); 

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(__dirname+ '/public'));
app.use(morgan('dev'));

mongoose.connect(config.database);

app.use(router);






app.listen(3000, function(){
    console.log("server is listening on port 3000");
})


