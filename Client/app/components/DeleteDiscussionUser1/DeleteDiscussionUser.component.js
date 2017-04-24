angular.module('befitApp').

component('DeleteDiscussionUser',{

templateUrl: 'components/DeleteDiscussionUser/DeleteDiscussionUser.html',
controller: function DeleteDiscussionUserController($http){

    var self = this ; 

    self.loading = false ;
    self.update = false ;
  

 self.DeleteDiscussionUser = function() {
  
    $http({
    method: "DELETE",
    url: "http://localhost:3000/Discussion",
   
           headers: {
        'Content-Type': 'application/json'
    }
}).then(function (res) {     
alert("Discussion is deleted succesfully ");


   

}, function (err) {         
   alert("Error : Try Again ! ");
    
});
self.loading = true ;
 
  
 }


} 
})
