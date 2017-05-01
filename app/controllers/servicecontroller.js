let ServiceProvider = require('../models/serviceprovider');

let serviceController = {
   //as a user i can search for service providers 
getALL:function(req,res){

ServiceProvider.find(function(err,serviceprovider) {
if(err){
    res.send(err);

}
else{
    res.json(serviceprovider);
}

}  )


},
//as a service provider i can login to an existing account

    login:function(req, res){
    
ServiceProvider.findOne({username:req.body.username},function(err,servicelogin){
if(err){

res.send(err.message);
}
if(req.body.password==servicelogin.password){

res.json(servicelogin);
}
})},
    //as a service provider i can register to the system
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

    }
            else{

              


              
     res.json({ message: 'ServiceProvider added' });        
    res.json({ success: true });

    }
        })

}



})


    }
}


module.exports = serviceController;


