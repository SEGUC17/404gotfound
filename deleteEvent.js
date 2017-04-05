let Event = require('../models/event');

let deleteEvent = {
  deleteEvent:function(req, res){
    Event.findById(id =  req.body._id).remove().exec(function(error,deleted){

    });
  }
}


module.exports = deleteEvent;
