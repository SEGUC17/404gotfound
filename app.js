	var express = require('express');
var router = require('./app/routes');
var bodyParser = require('body-parser');
var mongoose = require('mongoose'); 
var path = require('path');
var expressValidator = require('express-validator');
var DB_URI = "mongodb://localhost:27017/portfolio";
mongoose.promise = global.promise;

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(DB_URI);
mongoose.promise = global.promise;

app.use(router);
//app.use('/discussionUser',router);
app.listen(3005,function(){
	console.log('Server is listening on port 3005');
});
