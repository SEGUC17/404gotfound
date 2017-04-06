var mongoose = require('mongoose');

var discussionSchema = mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  comment: {
    type: String
  }
})

var Discussion =  mongoose.model('Discussion', discussionSchema);

module.exports = Discussion;
