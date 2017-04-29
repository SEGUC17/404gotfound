var eventCtrl =angular.module('eventCtrl',[]);

eventCtrl.controller('eventCtrl',function($scope,$rootScope,$http){

$rootScope.showit = false;
$scope.loading = false ;
$scope.update = false ;
  

$scope.addRow = function() {
  
    $http({
    method: "POST",
    url: "http://localhost:3000/event",
    data: { 
          
           sp_name : $scope.sp_name ,
           title : $scope.title , 
           date : $scope.date ,
           description : $scope.description 
         }, 
           headers: {
        'Content-Type': 'application/json'
    }
}).then(function (res) {     
alert("Event is posted succesfully ");
$scope.event = res.data;
$scope.eventDes = res.data.description;
$scope.name = res.data.sp_name ;
$scope.idofevent = res.data._id;
$scope.eventTitle = res.data.title ;
$scope.eventDate = res.data.date ;

   

}, function (err) {         
   alert("Error : Try Again ! ");
    
});
$scope.loading = true ;
$scope.sp_name = "";
$scope.title = "";
$scope.date = "";
$scope.description = ""  
  
 }

$scope.editEvent = function() {

    $http({
    method: "PUT",
    url: "http://localhost:3000/event",
    data: { 
          _id : $scope._id ,
          sp_name : $scope.sp_name ,
           title : $scope.title , 
           date : $scope.date ,
           description : $scope.description 
         }, 
           headers: {
        'Content-Type': 'application/json'
    }
}).then(function (res) {     
alert("Event is Updated succesfully ");
$scope.event = res.data;
$scope.name = res.data.sp_name ;
$scope.eventDes = res.data.description;
$scope.idofevent = res.data._id;
$scope.eventTitle = res.data.title ;
$scope.eventDate = res.data.date ;

   

}, function (err) {         
   alert("Error : Try Again ! ");
    
});
$scope.loading = true ;

$scope._id = "" ;
$scope.sp_name = "";
$scope.title = "";
$scope.date = "";
$scope.description = ""

}
 
});
     
