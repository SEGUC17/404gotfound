let Event = require('../models/Event');
let mongoose = require(mongoose);


let deleteSchedule = {
  deleteSchedule:function(req, res){
    let Schedule = new Schedule(req.body);
    Schedule.find(id: req.prams.id).remove().exec(function(error,deleted){

    });
  }
}


module.exports = deleteSchedule;
