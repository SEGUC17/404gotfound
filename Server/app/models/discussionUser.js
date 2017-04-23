var mongoose = require('mongoose');




var discussionSchema = mongoose.Schema({


  content: {
    type: String,
    required: true
  },
  comment: {

  	type: String
  }
});


var Discussion = module.exports = mongoose.model('Discussion', discussionSchema);

