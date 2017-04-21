'use strict';


var befitApp = angular.module('befitApp',['ui.router']);

befitApp.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    var postState = {
        name: 'post' ,
        url: '/post' ,
        template: '<post-dscussion></post-discussion>'
    }
    $stateProvider.state(postState);
}]);
