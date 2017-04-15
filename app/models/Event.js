var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({

  sp_name:  { type:String, required:true} ,
  title: String,
  date:  String,
  description: String 
  
}
);


var Event = mongoose.model("event", eventSchema);

module.exports = Event;