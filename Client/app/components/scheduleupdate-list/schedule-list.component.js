angular.module('befitApp').

component('schedule',{

templateUrl: 'components/scheduleupdate-list/schedule-list.template.html',
controller: function ScheduleListController($http, $stateParams) {


   var self = this ; 
self.heading = "Schedule";

     self.loading = false ;
     self.update = false ;

self.editSchedule = function() {

    $http({
    method: "PUT",
    url: "http://localhost:3000/schedule",
    data: { 
            _id : "58fcaa2306ae1156cbc045c0" ,
            sp_name:  self.sp_name ,
            details : self.details
         }, 
           headers: {
        'Content-Type': 'application/json'
    }
}).then(function (res) {     
alert("Schedule is Updated succesfully ");
self.schedule = res.data;
self.details = "";

   

}, function (err) {         
   alert("Error : Try Again ! ");
    
});
self.update = true ;
self._id = "" ;
self.sp_name = "";
self.details = "";
}

} 
})
     





































