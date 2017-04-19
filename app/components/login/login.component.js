angular.module('MyApp').
  component('login', {
    //Important note on path: it starts from the app folder as the root
    templateUrl: 'components/login/login.template.html',
    controller: function LoginController($http) {
      var self = this;
      this.heading = "Posts";

      self.signup = function() {
  
    $http({
    method: "POST",
    url: "http://localhost:3000/login",
    data: { 
          
          
           username : self.username , 

            
         }, 
           headers: {
        'Content-Type': 'application/json'
    }
}).then(function (res) {     
alert("login Success  ");


   

}, function (err) {         
   alert(err.message);
    
});

  
 }
}
   
    }
  );
