angular.module('befitApp').

component('scheduleupdateList',{

templateUrl: 'components/scheduleupdate-list/scheduleupdate-list.template.html',
controller: function ScheduleUpdateListController($http){


   var self = this ; 
    self.heading = "Schedule";

    self.loading = false ;
    self.update = false ;

self.editSchedule = function() {

    $http({
    method: "PUT",
    url: "http://localhost:3000/schedule",
    data: { 
          
            sp_name:  String,
            details : String
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

self.sp_name = "";
self.details = "";
}

} 
})
     



































