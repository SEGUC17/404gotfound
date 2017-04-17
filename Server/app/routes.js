// require dependincies
var express = require('express');
var router = express.Router();
var projectController = require('./controllers/postController');

// add routes
router.post('/userprofile', postController.Post);
router.post('/userprofile', postController.comment);

// export router
app.get('/', function(req, res) {
            res.json({ message: 'Hello world!'});
        });
module.exports = router;
