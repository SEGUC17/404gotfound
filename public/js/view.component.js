var viewCtrl =angular.module('viewCtrl',[]);

viewCtrl.controller('viewCtrl',function($scope,$rootScope,$http){

$rootScope.showit = false;


    $scope.heading="SERVICE PROVIDERS";
    
  
    $http({
    method: "Get",  
    url: "http://localhost:3000/get-data",
    data: { 
           username: $scope.username , 
           category:$scope.category,
           serviceoffered: $scope.serviceoffered
        
    
         }, 
           headers: {
        'Content-Type': 'application/json'
    }
}).then(function (res) {     


$scope.thisusername= res.data.username ; 

$scope.thiscategory=res.data.category;
$scope.thisserviceoffered=res.data.serviceoffered

   

}, function (err) {         

});

 

 
})
     


