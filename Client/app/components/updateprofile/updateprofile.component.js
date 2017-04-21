angular.module('befitApp').
  component('updateProfile', {
    
    templateUrl: 'components/updateprofile/updateprofile.template.html',
   
   
    controller: function serviceProviderController($http, $stateParams) {
      var self = this;
   self.id = $stateParams.id;

     self.updateprofile = function() {
  
    $http({
    method: "PUT",
    url: "http://localhost:3000/serivceprovider",
    data: { 
          _id : self._id ,
          name : self.name ,
           username : self.username , 
           password : self.password ,
           category : self.category ,
           serviceoffered:self.serviceoffered
         }, 
           headers: {
        'Content-Type': 'application/json'
    }
}).then(function (res) {     
alert("Profile is Updated succesfully ");


   

}, function (err) {         
   alert("Error : Try Again ! ");
    
});
self.update = true ;

self._id = "" ;
self.name = "";
self.username = "";
self.password = "";
self.category = "";
self.serviceoffered= ""
}

} 
})
     