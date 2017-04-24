angular.module('befitApp').

component('eventsList',{

templateUrl: 'components/show-all-events/show-all-events.template.html',
controller: function allEventsController($http){

    var self = this ; 
    this.heading = "Events";

    $http.get("http://localhost:3000/events").then(function(response) {
        self.events = response.data;
    
 });
       
   }
})

