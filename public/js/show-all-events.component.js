var showCtrl =angular.module('showCtrl',[]);

showCtrl.controller('showCtrl',function($scope,$rootScope,$http){

$rootScope.showit = false;

    var $scope = this ; 
    this.heading = "Events";

    $http.get("/events").then(function(response) {
        $scope.events = response.data;
    
 });
       
   }
)

