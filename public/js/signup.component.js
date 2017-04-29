var createCtrl =angular.module('createCtrl',[]);

createCtrl.controller('createCtrl',function($scope,$rootScope,$http){

$rootScope.showit = false;

$scope.heading = "SignUp";
$scope.showMe=false;
$scope.show=function(){

$scope.showMe=!$scope.showMe;

}
$scope.signup = function () {

$http({
    method: "POST",

    url: "http://localhost:3000/signup",

    data: { 
          
          name : $scope.name ,
           Username : $scope.username , 
           Password : $scope.password ,
           age : $scope.age,
           weight:$scope.weight,
           target_weight: $scope.target_weight,
           height:$scope,height,
           BMI:$scope.BMI,
           body_fat:$scope.body_fat
            
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
    
  );
