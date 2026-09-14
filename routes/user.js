const {Router} = require("express")
const userRouter = Router()
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
dotenv.config()
const {userModel} = require("../db.js")

userRouter.post("/signup" , async (req,res)=>{
    const username = req.body.username
    const password = req.body.password
    const email = req.body.email

    try {
        await userModel.create({
            email : email,
            password:password,
            username : username
        })
        return res.status(200).send("you are signed up")
    }catch(err){
        if(err.name === "ValidationError"){
            return res.status(400).json({
                msg : "Invalid input",
                errors : err.errors
            })
        }
        if (err.code === 11000){
            return res.status(409).json({
                msg : "user already exists",
                error : err.errors
            })
        }
        return res.status(500).json({
            msg : "signup failed"
        })        
    }
})

userRouter.post("/signin" , async (req,res)=>{
    const email = req.body.email
    const password = req.body.password

    const user = await userModel.findOne({email : email})

    if(!user){
        return res.status(403).json({
            msg : "wrong user doesn't exists"
        })
    }else{
        try{
            if(user.password !== password){
                return res.status(403).json({
                    msg : "incorrect password"
                })
            }
            const token = jwt.sign({id : user._id} , process.env.JWT_SECRET)
            return res.json({
                token : token
            })
        }catch(err){
            return res.json({
                msg : "error occured",
                error : err.message
            })
        }
    }
})

module.exports = userRouter