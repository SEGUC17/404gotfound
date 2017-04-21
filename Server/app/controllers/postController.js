let Post = require('../models/Post');

let postController = {
    
    Post:function(req, res){
        let post=new Post(req.body);
        post.save(function(err,post){
         if(err){
                res.send(err.message)
                
            }
            else{

                
                res.json(post);

    }



        })
        
    },

    comment:function(req, res){
        
        Post.find({_id:req.body._id},function(err, post){
    res.json(post);
   if (err) {
        res.status(500).send(err);
    } 
     else{
            if(post!=null){
post.comment=req.body._id;
post.save(function(err){
if(err){

res.send(err.message);

}
else{
    res.json("post updated");
}


})


            }    
else{

    res.json("not found");
}

     }




})
    }
        
    }

module.exports = postController;