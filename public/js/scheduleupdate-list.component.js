var scheduleupdateCtrl =angular.module('scheduleupdateCtrl',[]);

scheduleupdateCtrl.controller('scheduleupdateCtrl',function($scope,$rootScope,$http){

$rootScope.showit = false;


$scope.heading = "Schedule";

     $scope.loading = false ;
     $scope.update = false ;

$scope.editSchedule = function() {

    $http({
    method: "PUT",
    url: "http://localhost:3000/schedule",
    data: { 
            _id : "58fcaa2306ae1156cbc045c0" ,
            sp_name:  $scope.sp_name ,
            details : $scope.details
         }, 
           headers: {
        'Content-Type': 'application/json'
    }
}).then(function (res) {     
alert("Schedule is Updated succesfully ");
$scope.schedule = res.data;
$scope.details = "";

   

}, function (err) {         
   alert("Error : Try Again ! ");
    
});
$scope.update = true ;
$scope._id = "" ;
$scope.sp_name = "";
$scope.details = "";
}

} 
)
     





































