let Event = require('../models/event');

let deleteEvent = {
  deleteEvent:function(req, res){
    Event.findById(req.body._id).remove().exec(function(err,deleted){
      if(err){
        console.log("Error");
        res.send(err.message);

      }
      else {
        console.log("deleted");
        res.send(deleted);
      }

    });
  }
}


module.exports = deleteEvent;
