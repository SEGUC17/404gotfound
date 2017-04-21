'use strict';


var befitApp = angular.module('befitApp',['ui.router']);

befitApp.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    

    var reviewState = {
        name: 'review' ,
        url: '/review' ,
        template: '<write-review></write-review>'
    }
  
   

 var viewState = {
        name: 'view' ,
        url: '/view' ,
        template: '<viewsp></viewsp>'
    }
  
  


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
     $stateProvider.state(reviewState);
       $stateProvider.state(viewState);

    
    $urlRouterProvider.when('','/login');

        
}]);


