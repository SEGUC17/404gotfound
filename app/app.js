var befitApp = angular.module('befitApp',[ui.router]);

befitApp.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    
    var eventState = {
        name: 'event' ,
        url: '/event' ,
        template: '<event-list></event-list>'
    }
    $stateProvider.state(eventState);
    
    $urlRouterProvider.when('','/event');
        
}]);