let Event = require('../models/Event');
let mongoose = require(mongoose);


let deleteEvent = {
  deleteEvent:function(req, res){
    let event = new Event(req.body);
    Event.find(id: req.prams.id).remove().exec(function(error,deleted){

    });
  }
}


module.exports = deleteEvent;
