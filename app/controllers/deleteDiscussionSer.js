let Post = require('../models/Post');


let deleteDiscussionSer = {
  deleteDiscussion:function(req, res){
    Post.findById(req.body._id).remove().exec(function(err,deleted){
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
module.exports = deleteDiscussionSer;