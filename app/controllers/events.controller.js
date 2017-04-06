let Event = require('../models/events');
let join = require('../models/users');
let joinedEvents = require('../models/joinedEvents');

module.exports = {

    showEvents: showEvents,
    //showSingle: showSingle,
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

// function showSingle(req,res, name1){
//     Event.find({name: name1},{sp_name: 1, title: 1},(function(err,single_event){
//         if(err){
//             res.send(err.message);
//         }
//         else {
//              res.send(single_event);
//         }

//     }));
// }

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
        newJoined.name = req.body.name || newJoined.name;
    };
});
}
