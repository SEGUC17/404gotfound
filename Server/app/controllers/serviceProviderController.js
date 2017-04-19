// let ServiceProvider = require('../models/serviceprovider');
// let serviceProviderController = {


//     updateServiceProvider:function(req,res){
//        ServiceProvider.findById(req.body._id,function(err,serviceprovider){
//             if (err) {
//                 res.status(500).send(err);
//             }

//             if(serviceprovider){
//                 serviceprovider.name= req.body.name || serviceprovider.name;
//                 serviceprovider.username= req.body.username || serviceprovider.username;
//                 serviceprovider.password=req.body.password || serviceprovider.password;
//                 serviceprovider.category=req.body.category || serviceprovider.category;
//                 serviceprovider.serviceoffered=req.body.serviceoffered || serviceprovider.serviceoffered;
//                 serviceprovider.schedule=req.body.schedule || serviceprovider.schedule;

//                 serviceprovider.save(function(err,serviceprovider){
//                     if (err){
//                         res.status(500).send(err)
//                     }
//                     res.send(serviceprovider);
//                 });

//             }
//              if(!serviceprovider)  {
// res.send("not found");
//              }
//         })
//       }
//     }
            

// module.exports = serviceProviderController;