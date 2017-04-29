var app = angular.module('meanMapApp', ['addCtrl','writeCtrl','viewCtrl','spupdateCtrl','stripeCtrl','createCtrl','signupCtrl','signinCtrl','showCtrl','searchCtrl','scheduleupdateCtrl','scheduleCtrl','loginCtrl','homeCtrl','homepageCtrl','eventCtrl','queryCtrl', 'headerCtrl', 'geolocation', 'gservice', 'ngRoute'])

    
    .config(function($routeProvider){

        
        $routeProvider.when('/join', {
            controller: 'addCtrl',
            templateUrl: 'partials/addForm.html',

        
        }).when('/find', {
            controller: 'queryCtrl',
            templateUrl: 'partials/queryForm.html',

        
        }).when('/event', {
            controller: 'eventCtrl',
            templateUrl: 'partials/event-list.template.html',

        
        }).when('/homepage', {
            controller: 'homepageCtrl',
            templateUrl: 'partials/home-page.template.html',

        
        }).when('/home', {
            controller: 'homeCtrl',
            templateUrl: 'partials/home.template.html',

        
        }).when('/loginuser', {
            controller: 'loginCtrl',
            templateUrl: 'partials/login.template.html',

        
        }).when('/post', {
            controller: 'postCtrl',
            templateUrl: 'partials/post-discussion.template.html',

        
        }).when('/schedule', {
            controller: 'scheduleCtrl', 
            templateUrl: 'partials/schedule-list.template.html',

        
        }).when('/scheduleupdate', {
            controller: 'scheduleupdateCtrl', 
            templateUrl: 'partials/scheduleupdate-list.template.html',

        
        }).when('/search', {
            controller: 'searchCtrl', 
            templateUrl: 'partials/search-sp.template.html',

        
        }).when('/events', {
            controller: 'showCtrl', 
            templateUrl: 'partials/show-all-events.template.html',

        
        }).when('/signin', {
            controller: 'signinCtrl', 
            templateUrl: 'partials/sign-in.template.html',

        
        }).when('/signup', {
            controller: 'signupCtrl', 
            templateUrl: 'partials/sign-up.template.html',

        
        }).when('/signupuser', {
            controller: 'createCtrl', 
            templateUrl: 'partials/signup.template.html',

        
        }).when('/payment', {
            controller: 'stripeCtrl', 
            templateUrl: 'partials/stripe-payment.template.html',

        
        }).when('/updatesp', {
            controller: 'spupdateCtrl', 
            templateUrl: 'partials/updateprofile.template.html',

        
        }).when('/view', {
            controller: 'viewCtrl', 
            templateUrl: 'partials/view.template.html',

        
        }).when('/review', {
            controller: 'writeCtrl', 
            templateUrl: 'partials/write-review.template.html',

        
        }).otherwise({redirectTo:'/home'})
    });
