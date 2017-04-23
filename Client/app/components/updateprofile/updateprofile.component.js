angular.module('befitApp').
  component('updateProfile', {
    
    templateUrl: 'components/updateprofile/updateprofile.template.html',
   
   
    controller: function serviceProviderController($http, $stateParams) {
      var self = this;
      //self._id = ObjectId("58fa585d0a77e0288801385a");

    self.updateprofile = function() {
  
    $http({
    method: "PUT",
    url: "http://localhost:3000/serivceprovider",
    data: { 
           _id : "58fa572c0a77e02888013852" ,
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
     