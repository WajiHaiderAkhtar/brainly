const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose")

dotenv.config();
const {userRouter} = require("./routes/user")
const {contentRouter} = require("./routes/content")

const app = express()
app.use(express.json())
app.use("/user",userRouter)
app.use("/content",contentRouter)


async function main(){
    try{
        await mongoose.connect("mongodb+srv://wajilaphaider786:GuLwwDFRtgQbRjxC@cluster0.aqkuemk.mongodb.net/brainly")
        console.log("connected")
        app.listen(3000)
        console.log("listening to port 3000")
    }catch(error){
        console.log(error)
    }
    
}



main()
