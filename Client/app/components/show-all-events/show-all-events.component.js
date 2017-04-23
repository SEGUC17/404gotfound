angular.module('befitApp').

component('eventsList',{

templateUrl: 'components/show-all-events/show-all-events.template.html',
controller: function allEventsController($http){

    var self = this ; 
    this.heading = "Events";

    $http.get('./controller/allEventsController').then(function(response) {
        self.events = response.data;
    
 });
       
   }
}):

