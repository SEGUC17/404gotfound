var postCtrl =angular.module('postCtrl',[]);

postCtrl.controller('postCtrl',function($scope,$rootScope,$http){
 $rootScope.showit = false;
  $scope.posts = {};
  $scope.title = "Posts";
  $scope.post= {};
  $scope.post.comments = {};
//user or service provider add discussion
  $scope.addPost = function(){
   $http({
      method: "POST",
    url: "/post" ,
    data: {
      
     comment : $scope.comment,
     post :  $scope.post,
    
    },
    headers: {
        'Content-Type': 'application/json'
}
    })
  }
//user or service provider comment discussion
  $scope.addComment = function(){
    $scope.post.comment = {};
    $http({
      method: "PUT",
      url: "/comment" ,
      data: {
        comment = $scope.post.comment.createdOn = Date.now(),
        post = $scope.post.comments.push (this.comment) ,
       
      },
      headers: {
          'Content-Type': 'application/json'
  }
    })
  }

})
