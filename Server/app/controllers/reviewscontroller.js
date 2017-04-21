let ReviewsandRatings = require('../models/reviewsandratings');

let reviewsratings={

insert:function(req,res){

 var reviewsandratings =new ReviewsandRatings(req.body);
 reviewsandratings.save(function(err){
if(err){
  res.send(err.message);
}
else{
res.json("review add");

}

 })

  





}


}
module.exports = reviewsratings;