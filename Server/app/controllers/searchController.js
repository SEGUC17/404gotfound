let providers = require('../models/serviceprovider');

module.exports = {

    showSearchResults : showSearchResults
}

function showSearchResults (req,res){

   providers.findOne({name : req.body}, {name : 1}, (function(err,sp){
        if(err){
            res.send(err.message);
        }
        if(!sp){
            res.send("No Service Providers Found")
        }
        else {
            res.send(sp);
        }

     })
     );

} 