let ReviewsandRatings = require('../models/reviewsandratings');

let reviewsratings={

insert:function(req,res){

 var reviewsandratings =new ReviewsandRatings(req.body);

 reviewsandratings.save(function(err,reviewsandratings){

if(err){
  res.send(err.message);
}
else{


res.send(reviewsandratings);



}

 })

  





}


}
module.exports = reviewsratings;