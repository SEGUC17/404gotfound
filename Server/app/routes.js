var express = require('express');

var router = express.Router();

var allEventsController = require('./controllers/allEventsController');
var searchController = require('./controllers/searchController');
var scheduleController = require('./controllers/scheduleController');
var userController = require('./controllers/userController');
var eventController = require('./controllers/eventController');


router.get('/events', allEventsController.showEvents);
router.put('/joinedEvent', allEventsController.joinEvents);

router.get('/search', searchController.showSearchResults);

router.post('/event', eventController.createEvent);
router.put('/event', eventController.updateEvent);
router.post('/schedule', scheduleController.postSchedule);
router.put('/schedule',scheduleController.updateSchedule);



router.post('/signup', userController.add);
router.post('/login',userController.Bring);

router.put('/serivceprovider',scheduleController.updateServiceProvider);



module.exports = router;
