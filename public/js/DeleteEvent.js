var deleteCtrl =angular.module('deleteCtrl',[]);

deleteCtrl.controller('deleteCtrl',function($scope,$rootScope,$http){


$rootScope.showit = false;

     

    $scope.loading = false ;
    $scope.update = false ;
  
// delete event as a service provider
 $scope.DeleteEvent = function() {
  
    $http({
    method: "DELETE",
    url: "/Event",
   
           headers: {
        'Content-Type': 'application/json'
    }
}).then(function (res) {     
alert("Event is deleted succesfully ");


   

}, function (err) {         
   alert("Error : Try Again ! ");
    
});
$scope.loading = true ;
 
  
 }



})
