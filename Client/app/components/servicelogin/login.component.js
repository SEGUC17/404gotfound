angular.module('befitApp').
  component('login', {
    //Important note on path: it starts from the app folder as the root
    templateUrl: 'components/servicelogin/login.template.html',
    controller: function LoginController($http) {
      var self = this;
     self.heading = "Home page";
self.showMe=false;
      
      self.show=function(){

self.showMe=!self.showMe;



      }
      
var req={
    method: "POST",
    url: "http://localhost:3000/login",//route for service
    data: { 
          
          
           username : self.username , 
           password: self.password

            
         }, 
           headers: {
        'Content-Type': 'application/json'
    }
};

      self.login = function() {
  
    $http(req).then(function (res) {     
console.log("ok");
alert(res);


   

}, function (err) {         
   console.log("error");
   alert(err);
    
});

  
 }
}
   
    }
  );
