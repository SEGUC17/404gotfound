'use strict';

// Step 1

var MyApp= angular.module('befitApp', ['ui.router']);

MyApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  var loginState = {
    name: 'login',
    url: '/login',
    template: '<login></login>'
  }

  var signupState = {
    name: 'signup',
    url: '/signup',
    template: '<signup></signup>'
  }

  $stateProvider.state(loginState);
  $stateProvider.state(signupState);

  $urlRouterProvider.when('', '/');//when in home page
}]);

