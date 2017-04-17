var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
    

    post:{
        type:String,
        required:true, 
        unique:true
    },comment:{
       type:String

    }
    URL:String
})

var Post = mongoose.model("post", postSchema);

module.exports = post;