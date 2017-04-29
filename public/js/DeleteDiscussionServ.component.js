var discussionServCtrl =angular.module('discussionServCtrl',[]);

disussionServCtrl.controller('discussionServCtrl',function($scope,$rootScope,$http){

 

$rootScope.showit = false;
    $scope.loading = false ;
    $scope.update = false ;
  

 $scope.DeleteDiscussionServ = function() {
  
    $http({
    method: "DELETE",
    url: "/post",
   
           headers: {
        'Content-Type': 'application/json'
    }
}).then(function (res) {     
alert("Discussion is deleted succesfully ");


   

}, function (err) {         
   alert("Error : Try Again ! ");
    
});
$scope.loading = true ;
 
  
 }

})
