let Event = require('../models/Event');

let eventController = {

 createEvent:function(req, res){
        let event = new Event(req.body);

        event.save(function(err, event){
            if(err){
                console.log(err);
                res.send(err.message)
            }
            else{

                console.log(event);
                res.redirect('/');
            }
        })
    },

    updateEvent:function(req, res){
        
        Event.findById(req.params._id,function(err, event){
            
   if (err) {
        res.status(500).send(err);
    } if(event) {
        // Update each attribute with any possible attribute that may have been submitted in the body of the request
        // If that attribute isn't in the request body, default back to whatever it was before.
        event.title = req.body.title || event.title;
        event.description = req.body.description || event.description;
        event.date = req.body.date || event.date;
       event.sp_name = req.body.sp_name || event.sp_name;

        // Save the updated document back to the database
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