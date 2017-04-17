angular.module('befitApp').

component('eventList',{

templateUrl: 'components/event-list/event-list.template.html',
controller: function EventListController($http){

    var self = this ; 
    self.event = "";
    self.sp_name = "";
    self.title = "";
    self.date = "" ; 
    self.description = ""; 

 self.submit = function() {
   var eventData = $.param({
     json: JSON.stringify({
       sp_name: self.sp_name,
       title: self.title,
       date: self.date,
       description: self.description
       
     })

   });


$http.post('http://localhost:3000/event', eventData).then(function(response){
self.msg = "Event is posted successfully" ;
   }),function(response){
     self.msg = "Error  " ;

   }
}
} 
      
     
       /*$http({    
        method: 'POST',   
       url: 'http://localhost:3000/event',  
       data: eventData,
         headers: {        
           'Content-Type': 'application/json'   
         } 
        }).then((response) => {    
          self.event = response.event; });*/
})