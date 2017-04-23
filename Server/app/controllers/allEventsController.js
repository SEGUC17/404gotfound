let Event = require('../models/Event');
let join = require('../models/user');
let joinedEvents = require('../models/joinedEvents');

module.exports = {

    showEvents: showEvents,
    joinEvents: joinEvents
}

function showEvents (req,res){

    Event.find({}, {sp_name: 1, title: 1}, function(err,events){
        if(err){
            res.send(err.message);
        }
        else {
            res.send(events);
        }

     });
}

function joinEvents(req,res){
    let newJoined = new joinedEvents(req.body);
    
    joinedEvents.findOne({name: 1},function(err,user){
    if(err){
      res.send('Joining Event Failed');
    }
    if(user){
        res.send('You are already joined this event');
    }
    else {  
        newJoined.name = req.name || newJoined.name;
    };
});
}
