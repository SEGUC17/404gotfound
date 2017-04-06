var express = require('express');
var router = express.Router();
var scheduleController = require('./controllers/scheduleController');


router.put('/serivceprovider',scheduleController.updateServiceProvider);
router.put('/schedule',scheduleController.updateSchedule);

module.exports= router;