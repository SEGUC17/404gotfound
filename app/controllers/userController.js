
let User = require('../models/user');

let userController ={


//as a user i can sign up to the system
   add:function(req,res){
User.findOne({username:req.body.Username},function(err,user){
if(err){
    res.send(err.message);
}
if(user){
res.json("already exists");


}
else{
user = new User(req.body);
user.save(function(err){
            if(err){
                res.send(err.message)

            
        
    }
            else{

              

              
     res.json({ message: 'User added' });        
    res.json({ success: true });

    }
        })

}



})


    },
//as a user i login with an existing account

  Bring:function(req, res){
    
User.findOne({username:req.body.username},function(err,user){
if(err){

res.send(err.message);
}
if(req.body.password==user.password){

res.json(user);
}
})},
}



module.exports = userController;
