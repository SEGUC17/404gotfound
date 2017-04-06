
var express = require('express');
var router = express.Router();
var serviceController = require('./controllers/servicecontroller');
var reviewsController = require('./controllers/reviewscontroller');
var eventsController = require('./controllers/events.controller');
var searchController = require('./controllers/search.controller');
var scheduleController = require('./controllers/scheduleController');
var userController = require('./controllers/userController');
var eventController = require('./controllers/eventController');
var controller = require('./controller/controller');



router.post('/discussionUser', controller.postDiscussion);
router.put('/discussionUser/comment', controller.addComment);



router.post('/signup-sp', serviceController.signup);
router.post('/login-sp', serviceController.login);
router.get('/events', eventsController.showEvents);

router.get('/search', searchController.showSearchResults);


router.post('/event', eventController.createEvent);
router.put('/event', eventController.updateEvent);
router.post('/schedule', scheduleController.postSchedule);
router.put('/schedule',scheduleController.updateSchedule);



router.post('/signup', userController.add);
router.post('/login',userController.Bring);

router.put('/serivceprovider',scheduleController.updateServiceProvider);
router.get('/', function(req, res) {
    res.json({ message: 'welcome to the website' });   
});
router.get('/get-data', serviceController.getALL);
router.post('/insert', reviewsController.insert);



module.exports = router;
