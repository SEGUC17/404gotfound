angular.module('befitApp').

component('writeReview',{

templateUrl: 'components/write-review/write-review.template.html',
controller: function WriteCommentController($http){

    var self = this ; 

    self.loading = false ;
    
  

 self.addReview = function() {
  
    $http({
    method: "POST",
    url: "http://localhost:3000/insert",
    data: { 
           review: self.review , 
           rate : self.rate ,
         }, 
           headers: {
        'Content-Type': 'application/json'
    }
}).then(function (res) {     
alert("Review is posted succesfully ");

self.thisreview = res.data.review;
self.thisrate = res.data.rate ;

   

}, function (err) {         
 
});
self.loading = true ; 
self.review = "";
self.rate = "";
 }



    

} 
})
     


