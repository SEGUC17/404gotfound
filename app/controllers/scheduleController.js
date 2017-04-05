let Schedule = require('../models/Schedule');
let scheduleController = {
    createSchedule:function(req, res){
        let schedule = new schedule(req.body);

        schedule.save(function(err, schedule){
            if(err){
                console.log(err);
                res.send(err.message)
            }
            else{

                console.log(schedule);
                res.redirect('/');
            }
        })
},
    
    
    
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
      }
    }
            

module.exports = scheduleController;