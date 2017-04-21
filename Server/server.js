
var express = require('express');
var router = require('./app/routes');
var bodyParser = require('body-parser');
var expressValidator = require ('express-validator');
var apiRoutes = express.Router(); 
var mongoose = require('mongoose');
var morgan      = require('morgan');
var jwt    = require('jsonwebtoken'); 
var config = require('./config');
var stripe = require("stripe")("sk_test_AxrSsRJdvQ5DgIlN5EURlfzW");
var hbs = require("hbs");
var User   = require('./app/models/user');
var Serviceprov = require('./app/models/serviceprovider');
var path = require('path');

mongoose.connect(config.database); 

var app = express();


app.set('view engine', 'hbs');
app.set('superSecret', config.secret); 
app.set('views', path.join(__dirname , 'views'));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(__dirname+ '/public'));

app.use(morgan('dev'));

apiRoutes.post('/authenticate', function(req, res) {


  User.findOne({
    name: req.body.name
  }, function(err, user) {

    if (err) throw err;

    if (!user) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (user) {

      if (user.password != req.body.password) {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      } else {

        var token = jwt.sign(user, app.get('superSecret'), {
          expiresInMinutes: 1440 
        });

        res.json({
          success: true,
          message: 'Enjoy your token!',
          token: token
        });
      }   

    }

  });
});
apiRoutes.post('/authenticatesp', function(req, res) {


  Serviceprov.findOne({
    name: req.body.name
  }, function(err, servicrproviderreturn) {

    if (err) throw err;

    if (!user) {
      res.json({ success: false, message: 'Authentication failed. SP not found.' });
    } else if (servicrproviderreturn) {

      if (servicrproviderreturn.password != req.body.password) {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      } else {

       
        var token = jwt.sign(servicrproviderreturn, app.get('superSecret'), {
          expiresInMinutes: 1440 
        });

        res.json({
          success: true,
          message: 'Enjoy your token!',
          token: token
        });
      }   

    }

  });
});



app.use(router);


app.use(function(req, res, next) {    


    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);

   
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT,  DELETE');


    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

   
    res.setHeader('Access-Control-Allow-Credentials', true);

  
    next();
});



app.listen(3000, function(){
    console.log("server is listening on port 3000");
})


