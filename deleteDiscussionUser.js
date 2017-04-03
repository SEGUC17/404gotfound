let Event = require('../models/Event');
let mongoose = require(mongoose);


let deleteDiscussion = {
  deleteDiscussion:function(req, res){
    let Discussion = new Discussion(req.body);
    Discussion.find(id: req.prams.id).remove().exec(function(error,deleted){

    });
  }
}


module.exports = deleteDiscussion;
