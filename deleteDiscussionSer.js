let Discussion = require('../models/discussionSer');


let deleteDiscussionSer = {
  deleteDiscussion:function(req, res){
    Discussion.findById(id =  req.body._id).remove().exec(function(error,deleted){

    });
  }
}
module.exports = deleteDiscussionSer;
