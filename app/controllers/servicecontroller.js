let ServiceProvider = require('../models/serviceprovider');

let serviceController = {
    
    login:function(req, res){
    
        
ServiceProvider.findOne({username:req.body.username}, function(err, doc) {
    if (err) {
        
     res.send(err.message);


    }
else{
if(req.body.password==doc.password){
res.redirect('/serviceprovider');


}



}

})},


        

    signup:function(req, res){
        


ServiceProvider.find({username:req.body.username},function(err,serviceprovider){
if(err){
let serviceprovider = new ServiceProvider(req.body);
serviceprovider.name=req.body.name;
serviceprovider.username=req.body.username;
//serviceprovider.id=req.body.id; how the id will be passed,quto genrated from db
serviceprovider.password=req.body.password;
serviceprovider.category=req.body.category;
serviceprovider.serviceoffered=req.body.serviceoffered;
serviceprovider.schedule=req.body.schedule;

serviceprovider.save(function(err){
            if(err){
                res.send(err.message)
                console.log(err);
            }
            else{

              //  console.log(serviceprovider);
                res.redirect('/serviceprovider');
            }
        })
}

})





        
    }

}
module.exports = serviceController;