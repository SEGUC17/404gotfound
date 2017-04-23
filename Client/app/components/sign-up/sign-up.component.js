angular.module('befitApp').
  component('signup', {

    templateUrl: 'components/sign-up/sign-up.template.html',
   
   
    controller: function SignUPSPController($http) {
      var self = this;
    self.heading = "SignUp";
self.showMe=false;
self.show=function(){

self.showMe=!self.showMe;

}
self.signup = function () {

$http({
    method: "POST",
    url: "http://localhost:3000/signup-sp",
    data: { 
          
          name : self.name ,
           username : self.username , 
           password : self.password ,
           category : self.category,
           serviceofferd:self.serviceofferd,
           schedule: self.schedule
            
         }, 
           headers: {

        'Content-Type': 'application/json'
    }
}).then(function (res) {     
alert("sign up");


   

}, function (err) {         
   alert("failed");
    
});

}
  
 }
    }
  );
