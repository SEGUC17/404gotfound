var discussionUserCtrl =angular.module('discussionUserCtrl',[]);

disussionUserCtrl.controller('discussionUserCtrl',function($scope,$rootScope,$http){


$rootScope.showit = false;
    $scope.loading = false ;
    $scope.update = false ;
  
//user delete discussion
 $scope.DeleteDiscussionUser = function() {
  
    $http({
    method: "DELETE",
    url: "/Discussion",
   
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


} 
})
