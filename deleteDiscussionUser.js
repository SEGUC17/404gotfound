let Discussion = require('../models/Discussion');


let deleteDiscussionUser = {
  deleteDiscussion:function(req, res){
    Discussion.findById(id =  req.body._id).remove().exec(function(error,deleted){

    });
  }
}
module.exports = deleteDiscussionUser;
