let Schedule = require('../models/Schedule');


let deleteSchedule = {
  deleteSchedule:function(req, res){
    Schedule.findById(id =  req.body._id).remove().exec(function(err,deleted){
      if(err){
        
        res.send(err.message);

      }
      else {
        
        res.send(deleted);
      }

    });
  }
}


module.exports = deleteSchedule;
