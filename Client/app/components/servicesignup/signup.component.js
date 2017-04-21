angular.module('befitApp').
  component('signup', {
    //Important note on path: it starts from the app folder as the root
    templateUrl: 'components/servicesignup/signup.template.html',
   
   
    controller: function SignUpController($http) {
      var self = this;
    self.heading = "SignUp";
self.showMe=false;
self.show=function(){

self.showMe=!self.showMe;

}
self.signup = function () {
console.log(self.name);
$http({
    method: "POST",
    url: "http://localhost:3000/signup-sp",//route for service
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
