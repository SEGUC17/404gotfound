var stripeCtrl =angular.module('stripeCtrl',[]);

stripeCtrl.controller('stripeCtrl',function($scope,$rootScope,$http){

$rootScope.showit = false;



 $http({
    method: "GET",
    url: '/get-data',
     
           headers: {
        'Content-Type': 'application/json'
    }
}).then(function (res) {     


$scope.names = res[0].name;
$scope.fees = res[0].subscription_fee_per_month ;   

   
}, function (err) {         
   alert("Error : Try Again ! ");
    
});
    
var handler = StripeCheckout.configure({
  key: 'pk_test_pojaTYHRAQdb9dc1VtbTNOJE',
  image: "https://stripe.com/img/documentation/checkout/marketplace.png",
  locale: 'auto',
  token: function(token) {
 
   $http({
    method: "POST",
    url: "/charge",
    data: { 
          
      token : token 
    
         }, 
           headers: {
        'Content-Type': 'application/json'
    }
}).then(function (res) {     
alert("Payment is charged succesfully ");

   
}, function (err) {         
   alert("Error : Try Again ! ");
    
});


  }
});
$scope.click = function () {
document.getElementById('customButton').addEventListener('click', function(e) {

 

  handler.open({

    name: 'Demo Site',
    description: '2 widgets',
    amount: 2000 ,
    currency : "egp"
  });
  e.preventDefault();
});


window.addEventListener('popstate', function() {
  handler.close();
});
}
})


   
