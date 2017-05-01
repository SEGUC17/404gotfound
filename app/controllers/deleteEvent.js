let Event = require('../models/Event');

let deleteEvent = {
 
 //as a service provider i can delete an event
  deleteEvent:function(req, res){
    Event.findById(req.body._id).remove().exec(function(err,deleted){
      if(err){
       
        res.send(err.message);

      }
      else {
        
        res.send(deleted);
      }

    });
  }
}


module.exports = deleteEvent;
