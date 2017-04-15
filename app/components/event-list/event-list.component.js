angular.module('befitApp').

component('eventList',{

templateUrl: 'components/event-list/event-list.component.js',
controller: function EventListController($http){

    var self = this ; 
 self.submit = function() {
        console.log('User clicked submit with ', self.event);
      };
      var eventData = self.event ;
      
$http.post('/event', eventData).then(function(response){
 console.log('Event is added')
   } , function(response){
        console.log('Error')
   });
}




})