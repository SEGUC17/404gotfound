let Event = require('../models/Event');
let mongoose = require(mongoose);


let deleteEvent = {
  deleteEvent:function(req, res){
    Event.find(id: req.prams.id).remove().exec(function(error,deleted){

    });
  }
}


module.exports = deleteEvent;
