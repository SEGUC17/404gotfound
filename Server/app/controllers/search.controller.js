let providers = require('../models/serviceprovider');

module.exports = {

    showSearchResults : showSearchResults
}

function showSearchResults (req,res, searchName){
     var query = providers.find({name: searchName}, {'name': 1});
     
     query.exec(function(err, name) {
         if (err) {
             res.send('an error occured')
        }
        else {
            res.send(name);
     }
   });

} 