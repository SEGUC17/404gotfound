'use strict';


var befitApp = angular.module('befitApp',['ui.router']);

befitApp.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    
    var reviewState = {
        name: 'review' ,
        url: '/review' ,
        template: '<write-review></write-review>'
    }
  
    $stateProvider.state(reviewState);

 var view = {
        name: 'view' ,
        url: '/view' ,
        template: '<viewsp></viewsp>'
    }
  
    $stateProvider.state(reviewState);


        
}]);


