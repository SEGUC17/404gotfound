let ServiceProvider = require('../models/serviceprovider');
let serviceProviderController = {
    createserviceProvider:function(req, res){
        let serviceprovider = new serviceprovider(req.body);

        serviceprovider.save(function(err, serviceprovider){
            if(err){
                console.log(err);
                res.send(err.message)
            }
            else{

                console.log(serviceprovider);
                res.redirect('/');
            }
        })
},
    
    updateServiceProvider:function(req,res){
       ServiceProvider.findById(req.body._id,function(err,serviceprovider){
            if (err) {
                res.status(500).send(err);
            }

            if(serviceprovider){
                serviceprovider.name= req.body.name || ServiceProvider.name;
                serviceprovider.username= req.body.username || ServiceProvider.username;
                serviceprovider.password=req.body.password || ServiceProvider.password;
                serviceprovider.category=req.body.category || ServiceProvider.category;
                serviceprovider.serviceoffered=req.body.serviceoffered || ServiceProvider.serviceoffered;
                serviceprovider.schedule=req.body.schedule || ServiceProvider.schedule;

                serviceprovider.save(function(err,serviceprovider){
                    if (err){
                        res.status(500).send(err)
                    }
                    res.send(serviceprovider);
                });

            }
             if(!serviceprovider)  {
res.send("not found");
             }
        })
      }
    }
            

module.exports = serviceProviderController;