var express = require('express');
var router = express.Router();


var controller = require('./controller/controller');

router.post('/discussionUser',controller.postDiscussion);
router.post('/discussionUser/comment', controller.addComment);

module.exports = router;
