'use strict';


var befitApp = angular.module('befitApp',['ui.router']);

befitApp.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {


    var scheduleState = {
        name : 'scheduleList',
        url: '/schedule',
        template : '<schedule-list></schedule-list>'
    }

    var updatespState = {
        name : 'updatesp',
        url: '/updatesp:_id',
        // url: '/updatesp:_id',
        template : '<update-profile></update-profile>'
    }

    $stateProvider.state(scheduleState);

    $stateProvider.state(updatespState);

    
    //$urlRouterProvider.when('','/schedule');
         $urlRouterProvider.when('','/');
}]);


