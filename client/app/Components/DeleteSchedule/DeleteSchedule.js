angular.module('befitApp').

component('DeleteSchedule',{

templateUrl: 'components/DeleteSchedule/DeleteSchedule.html',
controller: function DeleteSchedule($http){

    var self = this ; 

    self.loading = false ;
    self.update = false ;
  

 self.DeleteSchedule = function() {
  
    $http({
    method: "DELETE",
    url: "http://localhost:3000/Schedule",
   
           headers: {
        'Content-Type': 'application/json'
    }
}).then(function (res) {     
alert("SChedule is deleted succesfully ");


   

}, function (err) {         
   alert("Error : Try Again ! ");
    
});
self.loading = true ;
 
  
 }


} 
})
