
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/test');
var reviewsandratingsSchema = mongoose.Schema({
    review:{
        type:String,
       
       
    },
    
    rate:{
        type:Integer, 

},
 collection: 'reviewsandratings'});

var reviewsandratings = mongoose.model('reviewsandratings', reviewsandratingsSchema);

module.exports = reviewsandratings;

