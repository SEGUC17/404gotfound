angular.module('befitApp').

component('viewsp',{

templateUrl: 'components/viewsp/viewsp.template.html',
controller: function viewsp($http){

    var self = this ; 

    self.heading="SERVICE PROVIDERS";
    
  
    $http({
    method: "Get",
    url: "http://localhost:3000/get-data",
    data: { 
           username: self.username , 
           category:self.category,
           serviceoffered: self.serviceoffered
        
    },
    
         }, 
           headers: {
        'Content-Type': 'application/json'
    }
}).then(function (res) {     


self.thisusername= res.data.username ; 

self.thiscategory=res.data.category;
self.thisserviceoffered=res.data.serviceoffered

   

}, function (err) {         
    //alert("Error : Try Again ! ");
});

 }



    

} 
})
     


