var express = require('express');
var router = express.Router();

var scheduleController = require('./controllers/scheduleController');
var userController = require('./controllers/userController');
var eventController = require('./controllers/eventController');

router.post('/event', eventController.createEvent);
router.put('/event', eventController.updateEvent);
router.post('/schedule', scheduleController.postSchedule);
router.put('/schedule',scheduleController.updateSchedule);



router.post('/signup', userController.add);
router.post('/login',userController.Bring);

router.put('/serivceprovider',scheduleController.updateServiceProvider);


module.exports= router;








