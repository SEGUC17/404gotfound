var express = require('express');
var router = express.Router();
var scheduleController = require('./controllers/scheduleController');
var serviceProviderController = require('./controllers/serviceProviderController');

router.put('/serivceprovider',serviceProviderController.updateServiceProvider);
router.put('/schedule',scheduleController.updateSchedule);

module.exports= router;