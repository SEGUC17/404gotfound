let Schedule = require('../models/schedule');


let deleteSchedule = {
  deleteSchedule:function(req, res){
    Schedule.findById(id =  req.body._id).remove().exec(function(error,deleted){

    });
  }
}


module.exports = deleteSchedule;
