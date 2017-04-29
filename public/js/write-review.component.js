var writeCtrl =angular.module('writeCtrl',[]);

writeCtrl.controller('writeCtrl',function($scope,$rootScope,$http){

$rootScope.showit = false;
    

    $scope.loading = false ;
    
  

 $scope.addReview = function() {
  
    $http({
    method: "POST",
    url: "/insert",
    data: { 
           review: $scope.review , 
           rate : $scope.rate ,
         }, 
           headers: {
        'Content-Type': 'application/json'
    }
}).then(function (res) {     
alert("Review is posted succesfully ");

$scope.thisreview = res.data.review;
$scope.thisrate = res.data.rate ;

   

}, function (err) {         
 
});
$scope.loading = true ; 
$scope.review = "";
$scope.rate = "";
 }



    
})
     


