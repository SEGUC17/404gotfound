let Post = require('../models/post');


let deleteDiscussionSer = {
  deleteDiscussion:function(req, res){
    Post.findById(req.body._id).remove().exec(function(err,deleted){
      if(err){
        console.log("err");
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
