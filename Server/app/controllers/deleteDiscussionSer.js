let Post = require('../models/Post');


let deleteDiscussionSer = {
  deleteDiscussion:function(req, res){
    Post.findById(req.body._id).remove().exec(function(err,deleted){
      if(err){
        
        res.send(err.message);

      }
      else {
        
        res.send(deleted);
      }



    });
  }
}
module.exports = deleteDiscussionSer;
