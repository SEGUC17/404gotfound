var express = require('express');
var router = express.Router();
var deleteDiscussionUser = require('./controllers/deleteDiscussionUser');
var deleteDiscussionSer = require('./controllers/deleteDiscussionSer');
var deleteSchedule = require('./controllers/deleteSchedule');
var deleteEvent = require('./controllers/deleteEvent');

router.post('/deleteUser', deleteDiscussionUser.deleteDiscussion);
router.post('/deleteSP', deleteDiscussionSer.deleteDiscussion);
router.post('/deleteEvent', deleteEvent.deleteEvent);
router.post('/deleteSchedule', deleteSchedule.deleteSchedule);

//export this router to use in our index.js
module.exports = router;
