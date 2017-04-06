var express = require('express');

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



module.exports = router;
