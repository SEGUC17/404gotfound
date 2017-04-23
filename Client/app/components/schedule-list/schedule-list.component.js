angular.module('befitApp').

component('scheduleList',{

templateUrl: 'components/schedule-list/schedule-list.template.html',
controller: function ScheduleListController($http){

    var self = this ; 
    self.loading = false ;
    self.update = false ;

 self.addSchedule = function() {
  
    $http({
    method: "POST",
    url: "http://localhost:3000/schedule",
    data: { 
          
           sp_name : self.sp_name ,
           details : self.details 
         
         }, 
           headers: {
        'Content-Type': 'application/json'
    }
}).then(function (res) {     
alert("Schedule is posted succesfully ");
self.schedule = res.data;
self.viewSchedule = res.data.details;
   

}, function (err) {         
   alert("Error : Try Again ! ");
    
});
self.loading = true ;
self.sp_name = "";
self.details = "";
  
 }
 
 } 
     
})