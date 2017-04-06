var express = require('express');
var bodyParser = require('body-parser').json;
var router = express.Router();


var controller = require('./controller/controller');

router.post('/discussionUser', controller.postDiscussion);
router.put('/discussionUser/comment', controller.addComment);

module.exports = router;
