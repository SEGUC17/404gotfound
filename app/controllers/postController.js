let Post = require('../models/Post');

let postController = {
    
    Post:function(req, res){
        let post=new Post(req.body);
        post.save(function(err,post){
         if(err){
                res.send(err.message)
                console.log(err);
            }
            else{

                console.log(post);
                res.redirect('/');

    }



        })
        
    },

    comment:function(req, res){
        
Post.findOne({_id:req.body._id},function(err,post){
  if(err){
res.send(err.message);


  }
   post.save(function(err,post){

if(err){
                res.send(err.message)
                console.log(err);
            }
            else{

                console.log(post);
                res.redirect('/');


   })




})
        
    }
}

module.exports = postController;