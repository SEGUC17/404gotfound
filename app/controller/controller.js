let Discussion = require('../models/discussionUser');
let controller = {
  postDiscussion:function(req,res){
    let newDiscussion = new Discussion(req.body);

  newDiscussion.save(function(err, newDiscussion){
    if(err){
      console.log('error');
      res.send(err.message);
    }
    else{
      console.log(newDiscussion);
      res.redirect('/');
    }
  });
},
  addComment: function(req,res){
    Discussion.findById(req.body._id,function(err,newDiscussion){
      if(err){
        console.log('error');
        res.send(err.message);
      }
      if(!newDiscussion){
        res.send('not found');
      }
      if(newDiscussion){
        newDiscussion.comment = req.body.comment||newDiscussion.comment;
        newDiscussion.save(function(err, newDiscussion){
      if(err){
      console.log('error');
      res.send(err.message);
    }
      else{
      console.log(newDiscussion);
      res.redirect('/');
    }
  });


      }
    });

  }
}
module.exports = controller;