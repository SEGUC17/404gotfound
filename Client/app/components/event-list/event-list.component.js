angular.module('befitApp').

component('eventList',{

templateUrl: 'components/event-list/event-list.template.html',
controller: function EventListController($http,$scope){

    var self = this ; 

    self.loading = false ;
    self.update = false ;
  

 self.addRow = function() {
  
    $http({
    method: "POST",
    url: "http://localhost:3000/event",
    data: { 
          
           sp_name : self.sp_name ,
           title : self.title , 
           date : self.date ,
           description : self.description 
         }, 
           headers: {
        'Content-Type': 'application/json'
    }
}).then(function (res) {     
alert("Event is posted succesfully ");
self.event = res.data;
self.eventDes = res.data.description;
self.name = res.data.sp_name ;
self.idofevent = res.data._id;
self.eventTitle = res.data.title ;
self.eventDate = res.data.date ;

   

}, function (err) {         
   alert("Error : Try Again ! ");
    
});
self.loading = true ;
self.sp_name = "";
self.title = "";
self.date = "";
self.description = ""  
  
 }

self.editEvent = function() {

    $http({
    method: "PUT",
    url: "http://localhost:3000/event",
    data: { 
          _id : self._id ,
          sp_name : self.sp_name ,
           title : self.title , 
           date : self.date ,
           description : self.description 
         }, 
           headers: {
        'Content-Type': 'application/json'
    }
}).then(function (res) {     
alert("Event is Updated succesfully ");
self.event = res.data;
self.name = res.data.sp_name ;
self.eventDes = res.data.description;
self.idofevent = res.data._id;
self.eventTitle = res.data.title ;
self.eventDate = res.data.date ;

   

}, function (err) {         
   alert("Error : Try Again ! ");
    
});
self.loading = true ;

self._id = "" ;
self.sp_name = "";
self.title = "";
self.date = "";
self.description = ""

}

} 
})
     
