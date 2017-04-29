var searchCtrl =angular.module('searchCtrl',[]);

searchCtrl.controller('searchCtrl',function($scope,$rootScope,$http){

$rootScope.showit = false;

    var $scope = this ; 
    this.heading = "Search For Service Providers";
    
     $scope.showEvents = function() {
        
        $http({
        method: "GET",
        url: "http://localhost:3000/search",
        headers: {
        'Content-Type': 'application/json'
    }
}).then(function (res) {     
$scope.sp = res.data;
$scope.name = res.data.name ;

}, function (err) {         
   alert("Error : Something went wrong, please try again ! ");
    
    });
  }
}

)