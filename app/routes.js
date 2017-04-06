var express = require('express');
var router = express.Router();

var userController = require('./controllers/userController');
var eventController = require('./controllers/eventController');
var scheduleController = require('./controllers/scheduleController');


router.post('/event', eventController.createEvent);
router.put('/event', eventController.updateEvent);
router.post('/schedule', scheduleController.postSchedule);



router.post('/signup', userController.add);
router.post('/login',userController.Bring);

module.exports = router ;




