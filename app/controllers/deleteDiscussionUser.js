let Discussion = require('../models/discussionUser');

//as a user i can delete discussion 
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
