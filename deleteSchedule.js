let Schedule = require('../models/Schedule');
let mongoose = require(mongoose);


let deleteSchedule = {
  deleteSchedule:function(req, res){
    Schedule.find(id: req.prams.id).remove().exec(function(error,deleted){

    });
  }
}


module.exports = deleteSchedule;
