var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var scheduleSchema = new Schema({

  sp_name:  String,
  image: String
}); 



var Schedule = mongoose.model("schedule", scheduleSchema);

module.exports = Schedule;










