var express = require('express');
var router = express.Router();
var userController = require('./controllers/userController');


router.post('/signup', userController.add);
router.post('/login',userController.Bring);

module.exports = router ;
