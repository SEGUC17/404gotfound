var deletescheduleCtrl =angular.module('deletescheduleCtrl',[]);

deletescheduleCtrl.controller('deletescheduleCtrl',function($scope,$rootScope,$http){


$rootScope.showit = false;

   

    $scope.loading = false ;
    $scope.update = false ;
  

 $scope.DeleteSchedule = function() {
  
    $http({
    method: "DELETE",
    url: "/Schedule",
   
           headers: {
        'Content-Type': 'application/json'
    }
}).then(function (res) {     
alert("SChedule is deleted succesfully ");


   

}, function (err) {         
   alert("Error : Try Again ! ");
    
});
$scope.loading = true ;
 
  
 }


 
})
