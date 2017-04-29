var spupdateCtrl =angular.module('spupdateCtrl',[]);

spupdateCtrl.controller('spupdateCtrl',function($scope,$rootScope,$http){

$rootScope.showit = false;
      

      

    $scope.updateprofile = function() {

  
    $http({
    method: "PUT",
    url: "/serivceprovider",
    data: { 

           _id : "58fa572c0a77e02888013852" ,
           name : $scope.name ,
           username : $scope.username , 
           password : $scope.password ,
           category : $scope.category ,
           serviceoffered:$scope.serviceoffered
         }, 
           headers: {
        'Content-Type': 'application/json'
    }
}).then(function (res) {     
alert("Profile is Updated succesfully ");



}, function (err) {         
   alert("Error : Try Again ! ");
    
});
$scope.update = true ;
$scope._id = "" ;
$scope.name = "";
$scope.username = "";
$scope.password = "";
$scope.category = "";
$scope.serviceoffered= "";
$scope.schedule= ""


}

})
     