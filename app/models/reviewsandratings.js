
var mongoose = require('mongoose');

var DB_URI = "mongodb://localhost:27017/SE";
mongoose.createConnection(DB_URI);
var reviewsandratingsSchema = mongoose.Schema({
    review:{
        type:String,
       
       
    },
    
    rate:{
        type:Number

},
 });

var ReviewsandRatings = mongoose.model('reviewsandratings', reviewsandratingsSchema);

module.exports = ReviewsandRatings;

