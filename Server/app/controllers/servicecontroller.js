let ServiceProvider = require('../models/serviceprovider');

let serviceController = {
    
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


    login:function(req, res){
    
ServiceProvider.findOne({username:req.body.username},function(err,servicelogin){
if(err){

res.send(err.message);
}
if(req.body.password==servicelogin.password){

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

              


              
     res.json({ message: 'ServiceProvider added' });        
       

    }
        })

}



})


    }
}


module.exports = serviceController;


