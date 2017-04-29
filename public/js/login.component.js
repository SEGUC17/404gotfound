var loginCtrl =angular.module('loginCtrl',[]);

loginCtrl.controller('loginCtrl',function($scope,$rootScope,$http){
$rootScope.showit = false;
$scope.heading = "Home page";
$scope.showMe=false;
      
      $scope.show=function(){

$scope.showMe=!$scope.showMe;



      }
      
var req={
    method: "POST",

    url: "http://localhost:3000/login",

    data: { 
          
          
           Username : $scope.username , 
           Password: $scope.password

            
         }, 
           headers: {
        'Content-Type': 'application/json'
    }
};

      $scope.login = function() {
  
    $http(req).then(function (res) {     
alert(res);


   

}, function (err) {         
   
   alert(err);
    
});

  
 }
}
   
  );
