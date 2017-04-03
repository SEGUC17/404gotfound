var express = require('express');
var router = express.Router();
var eventController = require('./controllers/eventController');
var scheduleController = require('./controllers/scheduleController');


router.post('/event', eventController.createEvent);
router.put('/event', eventController.updateEvent);
router.post('/schedule', scheduleController.postSchedule);
router.post('/deleteUser', deleteDiscussionUser.deleteDiscussion);
router.post('/deleteSP', deleteDiscussionSer.deleteDiscussion);
router.post('/deleteEvent', deleteEvent.deleteEvent);
router.post('/deleteSchedule', deleteSchedule.deleteSchedule);

//export this router to use in our index.js
module.exports = router;
