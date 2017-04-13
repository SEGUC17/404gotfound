angular.module('befitApp').

component('eventList',{

templateUrl: 'components/event-list/event-list.component.js',
controller: function EventListController($http){

    var self = this ; 
    this.heading = "Events";

    $http.post('/event', eventData).then(function(response){
        self.event = response.data ;
    });
}




})