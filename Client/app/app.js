'use strict';


var befitApp = angular.module('befitApp',['ui.router']);

befitApp.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    
    var eventState = {
        name: 'profile' ,
        url: '/profile' ,
        template: '<updateprofile></updateprofile>'
    }
    var scheduleState = {
        name : 'schedule',
        url: '/schedule',
        template : '<schedule-list></schedule-list>'
    }
    $stateProvider.state(eventState);
    $stateProvider.state(scheduleState);

    
    $urlRouterProvider.when('','/schedule');
        
}]);


