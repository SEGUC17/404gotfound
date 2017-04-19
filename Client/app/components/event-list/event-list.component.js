angular.module('befitApp').

component('eventList',{

templateUrl: 'components/event-list/event-list.template.html',
controller: function EventListController($http){

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
self.eventTitle = res.data.title;
self.idofevent = res.data._id;

   

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
self.eventTitle = res.data.title;
self.idofevent = res.data._id;
   

}, function (err) {         
   alert("Error : Try Again ! ");
    
});
self.update = true ;

self._id = "" ;
self.sp_name = "";
self.title = "";
self.date = "";
self.description = ""

}

} 
})
     
