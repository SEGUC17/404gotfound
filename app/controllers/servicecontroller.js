let ServiceProvider = require('../models/serviceprovider');

let serviceController = {
    
    login:function(req, res){
    
ServiceProvider.findOne({username:req.body.username},function(err,servicelogin){
if(err){
res.send(err.message);
}
if(req.body.password==servicelogin.password){
//res.redirect("/profile");
console.log("logged in");

res.json(servicelogin);
}
})},
    
    signup:function(req,res){
ServiceProvider.findOne({username:req.body.username},function(err,servicrproviderreturn){
if(err){
    res.send(err.message);
}
if(servicrproviderreturn){
res.json("already exists");


}
else{
serviceprovider = new ServiceProvider(req.body);
serviceprovider.save(function(err){
            if(err){
                res.send(err.message)
                console.log(err);


        
    }
            else{

              
               // res.redirect('/serviceprovider');
     res.json({ message: 'ServiceProvider added' });        
      //  
    }
        })

}



})


    }
}
module.exports = serviceController;