let Schedule = require('../models/Schedule');

let scheduleController = {

 postSchedule:function(req, res){
        let schedule = new Schedule(req.body);

        schedule.save(function(err, event){
            if(err){
                res.send(err.message)
                console.log(err);
            }
            else{

                console.log(schedule);
                res.redirect('/');
            }
        })
    }
}
module.exports = scheduleController;