angular.module('befitApp').

component('schedulelist',{

templateUrl: 'components/schedule-list/schedule-list.component.js',
controller: function ScheduleListController($http){

    var self = this ; 
    this.heading = "Schedule";

    $http.put('/schedule', scheduleData).then(function(response){
        self.schedule = response.data ;
    });
}




})