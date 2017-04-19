angular.module('signup').
  component('signup', {
    //Important note on path: it starts from the app folder as the root
    templateUrl: 'components/login/updateprofile.template.html',
   
   
    controller: function serviceProviderController($http, $stateParams) {
      var self = this;
    //   this.id = $stateParams.id;

     self.updateprofile = function() {
  
    $http({
    method: "put",
    url: "http://localhost:3000/updateprofile",
    data: { 
          
           name : self.name ,
           username : self.username , 
           password : self.password ,
           category : self.category,
           serviceofferd:self.serviceofferd,
           schedule:self.schedule,
            
         }, 
           headers: {
        'Content-Type': 'application/json'
    }
}).then(function (res) {     
alert("update Success  ");


   

}, function (err) {         
   alert("Error : Try Again ! ");
    
});

  
 }
    }
  });
