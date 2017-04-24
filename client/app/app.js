'use strict';

var blogApp = angular.module('befitApp', ['ui.router']);

blogApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  var eventsState = {
    name: 'events',
    url: '/events',
    template: '<events-list></events-list>'
  }

  var searchState = {
    name: 'search',
    url: '/search',
    template: '<search-list></search-list>'
  }

  $stateProvider.state(eventsState);
  $stateProvider.state(searchState);

  $urlRouterProvider.when('', '/events');
}]);
