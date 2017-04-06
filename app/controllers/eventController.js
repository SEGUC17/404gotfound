let Event = require('../models/Event');

let eventController = {

 createEvent:function(req, res){
        let event = new Event(req.body);

        event.save(function(err, event){
            if(err){
               
                res.send(err.message)
            }
            else{

              
                res.redirect('/');
            }
        })
    },

    updateEvent:function(req, res){
        
        Event.findById(req.body._id,function(err, event){
            
   if (err) {
        res.status(500).send(err);
    } if(event) {
        
        event.title = req.body.title || event.title;
        event.description = req.body.description || event.description;
        event.date = req.body.date || event.date;
       event.sp_name = req.body.sp_name || event.sp_name;

       
         event.save(function (err, event) {
            if (err) {
                res.status(500).send(err)
            }
            res.send(event);
        });
    } 
    if(!event)  {
        res.send("not found");
    }  

})
    }
}

module.exports = eventController;   