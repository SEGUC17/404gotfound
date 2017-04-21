'use strict';


var befitApp = angular.module('befitApp',['ui.router']);

befitApp.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    
    var eventState = {
        name: 'event' ,
        url: '/event' ,
        template: '<event-list></event-list>'
    }
    var scheduleState = {
        name : 'schedule',
        url: '/schedule',
        template : '<schedule-list></schedule-list>'
    }
      var paymentState = {
        name : 'payment',
        url: '/payment',
        template : '<stripe-payment></stripe-payment>'
    }
    $stateProvider.state(eventState);
    $stateProvider.state(scheduleState);
    $stateProvider.state(paymentState);

    
    $urlRouterProvider.when('','/event');
        
}]);


