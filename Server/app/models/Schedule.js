var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var scheduleSchema = new Schema({

  sp_name:  String,

  details : String

  
}); 



var Schedule = mongoose.model("schedule", scheduleSchema);

module.exports = Schedule;










