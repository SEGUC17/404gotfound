var express = require('express');
var router = express.Router();
var jwt    = require('jsonwebtoken');
var mongoose        = require('mongoose');
var stripe = require("stripe")("sk_test_AxrSsRJdvQ5DgIlN5EURlfzW");
var postController = require('./controllers/postController');
var deleteDiscussionUser = require('./controllers/deleteDiscussionUser');
var deleteDiscussionSer = require('./controllers/deleteDiscussionSer');
var deleteSchedule = require('./controllers/deleteSchedule');
var deleteEvent = require('./controllers/deleteEvent');
var serviceController = require('./controllers/servicecontroller');
var reviewsController = require('./controllers/reviewscontroller');
var eventsController = require('./controllers/events.controller');
var searchController = require('./controllers/search.controller');
var scheduleController = require('./controllers/scheduleController');
var userController = require('./controllers/userController');
var eventController = require('./controllers/eventController');
var controller = require('./controllers/controller');
var User            = require('./models/model.js');
var Siteuser   = require('./models/user');
var Serviceprov = require('./models/serviceprovider');



router.get('/events', eventsController.showEvents);
router.get('/search', searchController.showSearchResults);

router.get('/', function(req, res) {
    res.json({ message: 'welcome to the website' });   
});
router.get('/get-data', serviceController.getALL);

router.get('/payment', function(req,res){

    res.render('index', {

    });
});
router.get('/paysuccess', function(req , res){
    res.render('paysuccess',{

    });
});

    
    router.get('/users', function(req, res){

        var query = User.find({});
        query.exec(function(err, users){
            if(err) {
                return res.send(err);
            }
                

          
            res.json(users);
        });
    });

    
    router.post('/users', function(req, res){

      
        var newuser = new User(req.body);

        newuser.save(function(err){
            if(err){
               return res.send(err);
            }
            
            res.json(req.body);
        });
    });

    
    router.post('/query/', function(req, res){

        
        var lat             = req.body.latitude;
        var long            = req.body.longitude;
        var distance        = req.body.distance;
        var male            = req.body.male;
        var female          = req.body.female;
        var other           = req.body.other;
        var minAge          = req.body.minAge;
        var maxAge          = req.body.maxAge;
        var favLang         = req.body.favlang;
        var reqVerified     = req.body.reqVerified;

        
        var query = User.find({});

        if(distance){

            
            query = query.where('location').near({ center: {type: 'Point', coordinates: [long, lat]},

                
                maxDistance: distance * 1609.34, spherical: true});

        }

        
        if(male || female || other){
            query.or([{ 'gender': male }, { 'gender': female }, {'gender': other}]);
        }

        
        if(minAge){
            query = query.where('age').gte(minAge);
        }

        
        if(maxAge){
            query = query.where('age').lte(maxAge);
        }

        if(favLang){
            query = query.where('favlang').equals(favLang);
        }

        if(reqVerified){
            query = query.where('htmlverified').equals("Yep (Thanks for giving us real data!)");
        }

        
        query.exec(function(err, users){
            if(err){
                return res.send(err);
            }

            
            res.json(users);
        });
    });

    router.post('/charge', function(req , res){
    var token = req.body.stripeToken;
    var chargeAmount = req.body.chargeAmount;
    var charge = stripe.charges.create({
        amount: chargeAmount ,
        currency: "egp" ,
        source: token
    }, function(err, charge){
        if (err & err.type === "StripeCardError" ){
            
        }
    });
   
res.redirect('/paysuccess');
});


router.post('/authenticate', function(req, res) {


  Siteuser.findOne({
    name: req.body.name
  }, function(err, siteuser) {

    if (err) throw err;

    if (!siteuser) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (siteuser) {

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
router.post('/authenticatesp', function(req, res) {


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


router.post('/post', postController.Post);
router.post('/discussionUser', controller.postDiscussion);
router.post('/login-sp', serviceController.login);
router.post('/signup', userController.add);
router.post('/login',userController.Bring);
router.post('/schedule', scheduleController.postSchedule);
router.post('/event', eventController.createEvent);
router.post('/signup-sp', serviceController.signup);
router.post('/insert', reviewsController.insert);

router.put('/comment', postController.comment);
router.put('/discussionUser/comment', controller.addComment);
router.put('/event', eventController.updateEvent);
router.put('/schedule',scheduleController.updateSchedule);
router.put('/serivceprovider',scheduleController.updateServiceProvider);

    router.delete('/users/:objID', function(req, res){
        var objID = req.params.objID;
        var update = req.body;

        User.findByIdAndRemove(objID, update, function(err, user){
            if(err)
                res.send(err);
            res.json(req.body);
        });
    });

router.delete('/deleteUser', deleteDiscussionUser.deleteDiscussion);
router.delete('/deleteSP', deleteDiscussionSer.deleteDiscussion);
router.delete('/deleteEvent', deleteEvent.deleteEvent);
router.delete('/deleteSchedule', deleteSchedule.deleteSchedule);

module.exports = router;
