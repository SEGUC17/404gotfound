var signupCtrl =angular.module('signupCtrl',[]);

signupCtrl.controller('signupCtrl',function($scope,$rootScope,$http){

$rootScope.showit = false;

$scope.heading = "SignUp";
$scope.showMe=false;
$scope.show=function(){

$scope.showMe=!$scope.showMe;

}
$scope.signup = function () {

$http({
    method: "POST",
    url: "http://localhost:3000/signup-sp",
    data: { 
          
          name : $scope.name ,
           username : $scope.username , 
           password : $scope.password ,
           category : $scope.category,
           serviceofferd:$scope.serviceofferd,
           schedule: $scope.schedule
            
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
  
  );
