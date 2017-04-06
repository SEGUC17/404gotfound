
let User = require('../models/user');

let userController ={

    add:function(req, res){
  let user = new User(req.body);
  user.save(function(err,user){
    if(err){
      res.send(err.message);
      console.log(err);
    }else{  console.log(user);
      res.send(user);


  }
})
},



Bring:function(req , res){
  User.findOne({ Username: req.body.Username,Password: req.body.Password }).count(function(err, User) {
    console.log(User);
if(err){
  res.send(err.message)
  console.log(err.message);
}if(!User){
  res.send('login failed');

}else{
  console.log(User);
  res.send("Logged in");
}

})
  //if(req.body.Username == collection.find.{ Username: req.body.Username,Password: req.body.Password })
}
}



module.exports = userController;
