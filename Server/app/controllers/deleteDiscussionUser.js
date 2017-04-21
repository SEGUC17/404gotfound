let Discussion = require('../models/discussionUser');


let deleteDiscussionUser = {
  deleteDiscussion:function(req, res){
    Discussion.findById(req.body._id).remove().exec(function(err,deleted){
      if(err){
        
        res.send(err.message);

      }
      else {
        
        res.send(deleted);
      }

    });
  }
}
module.exports = deleteDiscussionUser;
