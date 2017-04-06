var express = require('express');
var path = require('path');

var router = express.Router();

eventsController = require('./controllers/events.controller');
searchController = require('./controllers/search.controller');

module.exports = router;

router.get('/events', eventsController.showEvents);
// router.get('/single-event', eventsController.showSingle);

router.get('/search', searchController.showSearchResults);