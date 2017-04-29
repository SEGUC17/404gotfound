var scheduleCtrl =angular.module('scheduleCtrl',[]);

scheduleCtrl.controller('scheduleCtrl',function($scope,$rootScope,$http){

$rootScope.showit = false; 
$scope.loading = false ;

 $scope.addSchedule = function() {
  
    $http({
    method: "POST",
    url: "http://localhost:3000/schedule",
    data: { 
          
           sp_name : $scope.sp_name ,
           details : $scope.details 
         
         }, 
           headers: {
        'Content-Type': 'application/json'
    }
}).then(function (res) {     
alert("Schedule is posted succesfully ");
$scope.schedule = res.data;
$scope.viewSchedule = res.data.details;
   

}, function (err) {         
   alert("Error : Try Again ! ");
    
});
$scope.loading = true ;
$scope.sp_name = "";
$scope.details = "";
 
  
 }
 } )