var express = require('express');
var bodyParser = require('body-parser');
var router = require('./app/routes');
var mongoose = require('mongoose');
var expressValidator = require ('express-validator');
var path = require('path');

var DB_URI = "mongodb://localhost:27017/portfolio";

mongoose.connect(DB_URI);

var app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname , 'views'));


app.use(router);


app.use(require('./app/routes'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname , 'public')));


app.listen(3000, function(){
    console.log("server is listening on port 3000");
})
