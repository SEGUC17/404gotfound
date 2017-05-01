let Discussion = require('../models/discussionUser');
let controller = {
  postDiscussion:function(req,res){
    let newDiscussion = new Discussion(req.body);
// as a service provider i can post a new discussion
  newDiscussion.save(function(err, newDiscussion){
    if(err){
     
      res.send(err.message);
    }
    else{
     
      res.redirect('/');
    }
  });
},
// as a service provider i comment on any discussion posted
  addComment: function(req,res){
    Discussion.findById(req.body._id,function(err,newDiscussion){
      if(err){
        
        res.send(err.message);
      }
      if(!newDiscussion){
        res.send('not found');
      }
      if(newDiscussion){
        newDiscussion.comment = req.body.comment||newDiscussion.comment;
        newDiscussion.save(function(err, newDiscussion){
      if(err){
     
      res.send(err.message);
    }
      else{
      
      res.redirect('/');
    }
  });


      }
    });

  }
}
module.exports = controller;
