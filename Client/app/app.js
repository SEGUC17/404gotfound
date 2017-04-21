'use strict';


var befitApp = angular.module('befitApp',['ui.router']);

befitApp.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    
  var scheduleupdateState = {
        name : 'scheduleupdateList',
        url: '/scheduleupdate',
        template : '<scheduleupdate-list></scheduleupdate-list>'
    }

    var updatespState = {
        name : 'updatesp',
        url: '/updatesp:_id',
        // url: '/updatesp:_id',
        template : '<update-profile></update-profile>'
    }

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
       var loginaState = {

    name: 'login',
    url: '/loginuser',
    template: '<login></login>'
  }

  var signupaState = {
    name: 'signup',
    url: '/signupuser',
    template: '<signup></signup>'
  }


$stateProvider.state(loginState);
$stateProvider.state(signupState);
$stateProvider.state(loginaState);
$stateProvider.state(signupaState);

 $stateProvider.state(scheduleupdateState);

 $stateProvider.state(updatespState);
 $stateProvider.state(eventState);
 $stateProvider.state(scheduleState);
 $stateProvider.state(paymentState);
 $stateProvider.state(reviewState);
 $stateProvider.state(viewState);

    
    $urlRouterProvider.when('','/login');

        
}]);


