var mongoose = require('mongoose');

var serviceproviderSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
        
    },
    
     username:{
        type:String,
        required:true,
        unique:true

     },
     password:{
        type:String,
        required:true




     },
    category:{
    type:String,
    required:true



    },
     serviceoffered:{
    type:String,
    required:true



},

subscription_fee_per_month : String , 

     schedule:{

     type:Array

     },
    URL:String
});

var ServiceProvider = mongoose.model("serviceprovider", serviceproviderSchema);


module.exports = ServiceProvider;
