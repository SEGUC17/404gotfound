var express = require('express');
var router = require('./app/routes');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var expressValidator = require ('express-validator');
var DB_URIo = "mongodb://localhost:27017/portfolio";
mongoose.Promise = global.Promise;

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname , 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname , 'public')));

mongoose.connect(DB_URIo);
mongoose.Promise = global.Promise;



app.use(router);



app.listen(3000, function(){
    console.log("server is listening on port 3000");
})
