var mongoose = require ('mongoose');

var userSchema = mongoose.Schema({

 Username: {
   type:String,
   required : true,
   unique:true },

   Password: {
     type:String,
     required : true,
   },

       admin: Boolean ,


 name : String ,
 age : Number,
 weight : Number,
 target_weight : Number,
 height: Number,
 BMI : Number,
 body_fat: Number

 });
   var User = mongoose.model("user", userSchema);

   module.exports = User;
