angular.module('befitApp').

component ('postDiscussion', {
templateUrl: 'components/post-discussion/post-discussion.template.html',
controller: function postController($http){
  var self = this;
  self.posts = {};
  self.title = "Posts";
  self.post= {};
  self.post.comments = {};
  self.addPost = function(){
    $http({
      method: "POST",
    url: "http://localhost:3000/post" ;
    data: {
      date:  Date.now(),
      self.post.comments: [],
      self.post: {},
    },
    headers: {
        'Content-Type': 'application/json'
}
    })
  }

  self.addComment = function(){
    self.post.comment = {};
    $http({
      method: "PUT",
      url: "http://localhost:3000/comment" ;
      data: {
        self.post.comment.createdOn = Date.now(),
        self.post.comments.push (this.comment) ,
        self.post.comment = {},
      },
      headers: {
          'Content-Type': 'application/json'
  }
    })
  }
}
