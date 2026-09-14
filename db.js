const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// try{
//     mongoose.connect("mongo_URI = mongodb+srv://wajilaphaider786:GuLwwDFRtgQbRjxC@cluster0.aqkuemk.mongodb.net/brainly")
// }catch(err){
//     console.log("db connection error")
// }

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
    type : {
        type : String,
        enum : ["document","tweet","youtube","link"]
    },
    title : String,
    link : String,
    tags : Array,
    userId : Object
})

const userModel = mongoose.model('user' , userSchema);

module.exports={
    userModel
}