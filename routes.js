var express = require('express');
var router = express.Router();
var eventController = require('./controllers/eventController');
var scheduleController = require('./controllers/scheduleController');


router.post('/event', eventController.createEvent);
router.put('/event', eventController.updateEvent);
router.post('/schedule', scheduleController.postSchedule);
router.post('/delete', deleteDiscussionUser.deleteDiscussion);
router.post('/delete', deleteDiscussionSer.deleteDiscussion);
router.post('/delete', deleteEvent.deleteEvent);
router.post('/delete', deleteSchedule.deleteSchedule);

//export this router to use in our index.js
module.exports = router;
