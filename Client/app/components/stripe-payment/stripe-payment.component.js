angular.module('befitApp').

component('stripePayment',{

templateUrl: 'components/stripe-payment/stripe-payment.template.html',
controller: function StripePaymentController($http){

  var self = this ; 


 $http({
    method: "GET",
    url: 'http://localhost:3000/get-data',
     
           headers: {
        'Content-Type': 'application/json'
    }
}).then(function (res) {     


self.names = res[0].name;
self.fees = res[0].subscription_fee_per_month ;   

   
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
    url: "http://localhost:3000/charge",
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


   
