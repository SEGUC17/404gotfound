var mongoose = require ('mongoose');

var joinedEventsSchema = mongoose.Schema({

   name : String 
 });

var joinedUser = mongoose.model("joined", joinedEventsSchema);

module.exports= joinedUser;