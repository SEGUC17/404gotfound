angular.module('befitApp').

component('searchList',{

templateUrl: 'components/searvh-sp/search-sp.template.html',
controller: function allEventsController($http){

    var self = this ; 
    this.heading = "Search For Service Providers";
    
     self.showEvents = function() {
        
        $http({
        method: "GET",
        url: "http://localhost:3000/search",
        headers: {
        'Content-Type': 'application/json'
    }
}).then(function (res) {     
self.sp = res.data;
self.name = res.data.name ;

}, function (err) {         
   alert("Error : Something went wrong, please try again ! ");
    
    });
  }
}

}):