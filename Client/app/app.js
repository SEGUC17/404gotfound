var befitApp = angular.module('befitApp',[ui.router]);
befitApp.controller('postController', function postController($scope)){
 var posting = this;
  $scope.heading = "Posts";
  $scope.posts = {};
  $scope.title = "Posts";

}
$scope.post= {};
$scope.addPost = function(){
	$scope.post.createdOn = Date.now();
	$scope.post.comments = [];
	$scope.post = {};
};

befitApp.controller ('postController' , function(){
	this.comment = {};
	this.addComment = function (post) {
		this.comment.createdOn = Date.now();
		post.comments.push(this.comment);
		this.comment = {};
	}
})
})();
