const {Router} = require("express")
const contentRouter = Router()
const jwt = require("jsonwebtoken")

const {contentModel} = require("../db")
const { userRouter } = require("./user")
const JWT_SECRET="wajihaider"


contentRouter.post("/add" , async(req,res)=>{
    const title = req.body.title
    const link = req.body.link
    const tag = req.body.tag
    // const userId = req.body.userId
    const token = req.body.token
    let userId;

    const verified = jwt.verify(token,JWT_SECRET)
    if(verified){
        userId = verified.id
    }else{
        return res.status(400).send("invalid token")
    }
    await contentModel.create({
        title:title,
        link:link,
        tag : tag,
        userId:userId
    })

    return res.status(200).json({
        msg : "content added"
    })


})
module.exports = {contentRouter}