var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var DB_URI = "mongodb://localhost:27017/portfolio";

mongoose.connect(DB_URI);

var app = express();

var router = require('./app/routes');
app.use('/', router);


app.use(require('./app/routes'));

app.use(bodyParser.json);
app.use(bodyParser.urlencoded({extended: false}));


app.listen(8080, function(){
    console.log('Server is listening on port 8080')
})