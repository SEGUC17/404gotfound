
var express = require('express');
var router = express.Router();

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

router.post('/charge', function(req , res){
    var token = req.body.stripeToken;
    var chargeAmount = req.body.chargeAmount;
    var charge = stripe.charges.create({
        amount: chargeAmount ,
        currency: "egp" ,
        source: token
    }, function(err, charge){
        if (err & err.type === "StripeCardError" ){
            console.log ("Your card was declined");  
        }
    });
    console.log("Your payment was successful")
res.redirect('/paysuccess');
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

router.delete('/deleteUser', deleteDiscussionUser.deleteDiscussion);
router.delete('/deleteSP', deleteDiscussionSer.deleteDiscussion);
router.delete('/deleteEvent', deleteEvent.deleteEvent);
router.delete('/deleteSchedule', deleteSchedule.deleteSchedule);





module.exports = router;
