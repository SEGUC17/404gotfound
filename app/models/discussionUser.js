var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var discussionSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  comment: {
  	type: String
  }
});


var Discussion = module.exports = mongoose.model('Discussion', discussionSchema);