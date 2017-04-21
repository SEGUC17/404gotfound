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
    admin: Boolean ,
     serviceoffered:{
    type:String,
    required:true



    },
     schedule:{

     type:Array

     },
    URL:String
});

var ServiceProvider = mongoose.model("serviceprovider", serviceproviderSchema);


module.exports = ServiceProvider;
