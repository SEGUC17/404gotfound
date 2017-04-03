// require dependincies 
var express = require('express');
var router = express.Router();
var serviceController = require('./controllers/servicecontroller');

// add routes
router.post('/signup', serviceController.signup);
router.post('/login', serviceController.login);


//router.post('/serviceprovider', projectController.createProject);

// export router

module.exports = router;