let Discussion = require('../models/Discussion');
let mongoose = require(mongoose);


let deleteDiscussion = {
  deleteDiscussion:function(req, res){
    Discussion.find(id: req.prams.id).remove().exec(function(error,deleted){

    });
  }
}


module.exports = deleteDiscussion;
