angular.module('signup').
  component('signup', {
    //Important note on path: it starts from the app folder as the root
    templateUrl: 'components/login/signup.template.html',
   
   
    controller: function SignUpController($http, $stateParams) {
      var self = this;
    //   this.id = $stateParams.id;

     self.signup = function() {
  
    $http({
    method: "POST",
    url: "http://localhost:3000/signup",
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
alert("Registration Success  ");


   

}, function (err) {         
   alert("Error : Try Again ! ");
    
});

  
 }
    }
  });
