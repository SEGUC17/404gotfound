// require dependincies 
var express = require('express');
var router = express.Router();
var serviceController = require('./controllers/servicecontroller');
var reviewsController = require('./controllers/reviewscontroller');
// add routes
router.post('/signup', serviceController.signup);
router.post('/login', serviceController.login);
router.get('/', function(req, res) {
    res.json({ message: 'welcome to the website' });   
});
router.get('/get-data', serviceController.getALL);
router.post('/insert', reviewsController.insert);

//router.post('/serviceprovider', projectController.createProject);

// export router

module.exports = router;
