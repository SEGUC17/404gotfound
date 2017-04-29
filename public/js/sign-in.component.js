var signinCtrl =angular.module('signinCtrl',[]);

signinCtrl.controller('signinCtrl',function($scope,$rootScope,$http){

$rootScope.showit = false;
$scope.heading = "Home page";
$scope.showMe=false;
      
$scope.show=function(){

$scope.showMe=!$scope.showMe;



      }
      
var req={
    method: "POST",
    url: "http://localhost:3000/login-sp",
    data: { 
          
          
           username : $scope.username , 
           password: $scope.password

            
         }, 
           headers: {
        'Content-Type': 'application/json'
    }
};

      $scope.login = function() {
  
    $http(req).then(function (res) {     
console.log("ok");
alert(res);


   

}, function (err) {         
   console.log("error");
   alert(err);
    
});

  
 }
}
   
  );
