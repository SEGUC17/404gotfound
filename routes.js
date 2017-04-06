var express = require('express');
var router = express.Router();
var deleteDiscussionUser = require('./controllers/deleteDiscussionUser');
var deleteDiscussionSer = require('./controllers/deleteDiscussionSer');
var deleteSchedule = require('./controllers/deleteSchedule');
var deleteEvent = require('./controllers/deleteEvent');

router.delete('/deleteUser', deleteDiscussionUser.deleteDiscussion);
router.delete('/deleteSP', deleteDiscussionSer.deleteDiscussion);
router.delete('/deleteEvent', deleteEvent.deleteEvent);
router.delete('/deleteSchedule', deleteSchedule.deleteSchedule);

//export this router to use in our index.js
module.exports = router;
