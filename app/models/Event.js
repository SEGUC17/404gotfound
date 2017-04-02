var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
  _id: {type: String , unique:true},
  sp_name:  String,
  title: String,
  date:  Date,
  description: String 
  
}
);


var Event = mongoose.model("event", eventSchema);

module.exports = Event;