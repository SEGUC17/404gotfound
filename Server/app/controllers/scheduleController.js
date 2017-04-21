let Schedule = require('../models/Schedule');
let ServiceProvider = require('../models/serviceprovider');
let scheduleController = {
    
    updateSchedule:function(req,res){
        Schedule.findById(req.body._id,function(err,schedule){
            if (err) {
                res.status(500).send(err);
            }
            if(schedule){

                schedule.sp_name= req.body.sp_name || schedule.sp_name;
                schedule.image=req.body.image || schedule.image;

                schedule.save(function(err,schedule){
                    if (err){
                        res.status(500).send(err)
                    }
                    res.send(schedule);
                });

            }
             if(!schedule)  {
res.send("not found");
             }
        })
      },
 
    
      updateServiceProvider:function(req,res){
       ServiceProvider.findById(req.body._id,function(err,serviceprovider){
            if (err) {
                res.status(500).send(err);
            }

            if(serviceprovider){
                serviceprovider.name= req.body.name || serviceprovider.name;
                serviceprovider.username= req.body.username || serviceprovider.username;
                serviceprovider.password=req.body.password || serviceprovider.password;
                serviceprovider.category=req.body.category || serviceprovider.category;
                serviceprovider.serviceoffered=req.body.serviceoffered || serviceprovider.serviceoffered;
                serviceprovider.schedule=req.body.schedule || serviceprovider.schedule;

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
      },

    
       postSchedule:function(req, res){
        let schedule = new Schedule(req.body);

        schedule.save(function(err, schedule){

            if(err){
                res.send(err.message)
              
            }
            else{

                res.send(schedule);

            }
        })
    }
    }     






module.exports = scheduleController;