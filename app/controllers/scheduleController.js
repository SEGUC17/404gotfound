let Schedule = require('../models/Schedule');

let scheduleController = {

 postSchedule:function(req, res){
        let schedule = new Schedule(req.body);

        schedule.save(function(err, event){
            if(err){
                res.send(err.message)
              
            }
            else{

               
                res.redirect('/');
            }
        })
    }
}
module.exports = scheduleController;