var express = require('express');
var router = express.Router();
var eventController = require('./controllers/eventController');
var scheduleController = require('./controllers/scheduleController');



 
        
    router.post('/event', eventController.createEvent);
    router.post('/schedule', scheduleController.postSchedule);

    router.put('/event', eventController.updateEvent);




    
module.exports = router;



