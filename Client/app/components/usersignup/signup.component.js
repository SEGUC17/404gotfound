angular.module('befitApp').

  component('signupuser', {
 
    templateUrl: 'components/usersignup/signup.template.html',
   
   
    controller: function SignUpUserController($http) {

      var self = this;
    self.heading = "SignUp";
self.showMe=false;
self.show=function(){

self.showMe=!self.showMe;

}
self.signup = function () {

$http({
    method: "POST",

    url: "http://localhost:3000/signup",

    data: { 
          
          name : self.name ,
           Username : self.username , 
           Password : self.password ,
           age : self.age,
           weight:self.weight,
           target_weight: self.target_weight,
           height:self,height,
           BMI:self.BMI,
           body_fat:self.body_fat
            
         }, 
           headers: {

        'Content-Type': 'application/json'
    }
}).then(function (res) {     
alert(res);


   

}, function (err) {         
   alert(err);
    
});

}
  
 }
    }
  );
