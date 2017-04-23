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
    var scheduleupdateState = {
        name : 'scheduleList',
        url: '/scheduleupdate',
        template : '<schedule></schedule>'
    }

    var updatespState = {
        name : 'updatesp',
        url: '/updatesp',
        template : '<update-profile></update-profile>'
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
    name: 'signin',
    url: '/signin',
    template: '<signin></signin>'
  }


  var signupState = {
    name: 'signup',
    url: '/signup',
    template: '<signup></signup>'
  }
   var loginuserState = {
    name: 'loginuser',
    url: '/loginuser',
    template: '<loginuser></loginuser>'
  }

  var signupuserState = {
    name: 'signupuser',
    url: '/signupuser',
    template: '<signupuser></signupuser>'
  }
  var postState = {
        name: 'post' ,
        url: '/post' ,
        template: '<post-dscussion></post-discussion>'
    }

     var homepageState = {
        name: 'homepage' ,
        url: '/homepage' ,
        template: '<homepage></homepage>'
    }

      var homeState = {
        name: 'home' ,
        url: '/home' ,
        template: '<home></home>'
    }

$stateProvider.state(loginuserState);
$stateProvider.state(signupuserState);
$stateProvider.state(signupState);
$stateProvider.state(loginState);
$stateProvider.state(scheduleupdateState);
$stateProvider.state(updatespState);
$stateProvider.state(eventState);
$stateProvider.state(scheduleState);
$stateProvider.state(paymentState);
$stateProvider.state(reviewState);
$stateProvider.state(viewState);
$stateProvider.state(postState);
$stateProvider.state(homepageState);
$stateProvider.state(homeState);

    
    $urlRouterProvider.when('','/home');

        
}]);



