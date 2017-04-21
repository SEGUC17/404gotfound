
let User = require('../models/user');

let userController ={

    add:function(req, res){
  let user = new User(req.body);
  user.save(function(err,user){
    if(err){
      res.send(err.message);
      
    }else{ 
      res.send(user);


  }
})
},



Bring:function(req , res){
  User.findOne({ Username: req.body.Username,Password: req.body.Password }).count(function(err, User) {
    res.send(User);
if(err){
  res.send(err.message)
  
}if(!User){
  res.send('login failed');

}else{
  
  res.send("Logged in");
}

})
  
}
}



module.exports = userController;
