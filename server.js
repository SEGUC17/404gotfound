var express         = require('express');
var mongoose        = require('mongoose');
var port            = process.env.PORT || 3000;
var config        = require('./app/config');
var router = require('./app/routes');
var expressValidator = require ('express-validator');
var path = require('path');
var stripe = require("stripe")("sk_test_AxrSsRJdvQ5DgIlN5EURlfzW");
var hbs = require("hbs");
var jwt    = require('jsonwebtoken');
var morgan          = require('morgan');
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');
var app             = express();


mongoose.connect(config.database);


app.use(express.static(__dirname + '/public'));                
app.use('/bower_components',  express.static(__dirname + '/bower_components')); 
app.use(morgan('dev'));                                         
app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));               
app.use(bodyParser.text());                                     
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));  
app.use(methodOverride());
app.use(router);


app.set('view engine', 'hbs');
app.set('superSecret', config.secret); 
app.set('views', path.join(__dirname , 'views'));

app.listen(port);
console.log('App listening on port ' + port);
