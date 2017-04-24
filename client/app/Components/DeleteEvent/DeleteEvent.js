angular.module('befitApp').

component('DeleteEvent',{

templateUrl: 'components/DeleteEvent/DeleteEvent.component.html',
controller: function DeleteEvent($http){

    var self = this ; 

    self.loading = false ;
    self.update = false ;
  

 self.DeleteEvent = function() {
  
    $http({
    method: "DELETE",
    url: "http://localhost:3000/Event",
   
           headers: {
        'Content-Type': 'application/json'
    }
}).then(function (res) {     
alert("Event is deleted succesfully ");


   

}, function (err) {         
   alert("Error : Try Again ! ");
    
});
self.loading = true ;
 
  
 }


} 
})
