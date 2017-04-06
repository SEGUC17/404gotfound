let Schedule = require('../models/schedule');


let deleteSchedule = {
  deleteSchedule:function(req, res){
    Schedule.findById(id =  req.body._id).remove().exec(function(err,deleted){
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


module.exports = deleteSchedule;
