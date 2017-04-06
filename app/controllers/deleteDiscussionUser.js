let Discussion = require('../models/discussionUser');


let deleteDiscussionUser = {
  deleteDiscussion:function(req, res){
    Discussion.findById(req.body._id).remove().exec(function(err,deleted){
      if(err){
        console.log("Error");
        res.send(err.message);

      }
      else {
        console.log("deleted");
        res.send(deleted);
      }

    });
  }
}
module.exports = deleteDiscussionUser;
