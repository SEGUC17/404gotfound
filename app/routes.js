var express = require('express');
<<<<<<< HEAD
var bodyParser = require('body-parser').json;
var router = express.Router();


var controller = require('./controller/controller');

router.post('/discussionUser', controller.postDiscussion);
router.put('/discussionUser/comment', controller.addComment);
=======

var router = express.Router();

var eventsController = require('./controllers/events.controller');
var searchController = require('./controllers/search.controller');
var scheduleController = require('./controllers/scheduleController');
var userController = require('./controllers/userController');
var eventController = require('./controllers/eventController');


router.get('/events', eventsController.showEvents);

router.get('/search', searchController.showSearchResults);


router.post('/event', eventController.createEvent);
router.put('/event', eventController.updateEvent);
router.post('/schedule', scheduleController.postSchedule);
router.put('/schedule',scheduleController.updateSchedule);



router.post('/signup', userController.add);
router.post('/login',userController.Bring);

router.put('/serivceprovider',scheduleController.updateServiceProvider);


>>>>>>> d558e76119e3e92dd54c9fead9e84207736a0741

module.exports = router;
