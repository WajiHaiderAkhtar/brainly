const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username : {
    type: String,
    minlength: 3,
    maxlength: 10,
    match: /^[a-zA-Z]+$/
    },
    password : String,
    email : {type : String , unique : true},
})

const contentSchema = new Schema({
    // type : {
    //     type : String,
    //     enum : ["document","tweet","youtube","link"]
    // },
    title : String,
    link : String,
    tags : String,  //[{type : mongoose.Types.ObjectId , ref : 'tags'}]
    userId : {type : mongoose.Types.ObjectId , ref : 'user' , required : true }
})

const userModel = mongoose.model('user' , userSchema);
const contentModel = mongoose.model('content',contentSchema);

module.exports={
    userModel,
    contentModel
}