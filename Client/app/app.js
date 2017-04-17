var befitApp = angular.module('befitApp',[ui.router]);
befitApp.controller('postController', function postController($scope)){
  $scope.heading = "Posts";
  $scope.posts = [
    {

    }
  ]
}
