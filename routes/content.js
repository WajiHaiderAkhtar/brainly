const {Router} = require("express")
const contentRouter = Router()
const jwt = require("jsonwebtoken")

const {contentModel} = require("../db")
// const { userRouter } = require("./user")
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
contentRouter.get("/view" , async(req,res)=>{
    const verified = jwt.verify(req.body.token , JWT_SECRET)
    let userId;
    if(verified){
        userId = verified.id;
    }else{
        return res.status(403).json({
            msg : "unauthorized user"
        })
    }
    const data = await contentModel.find({userId : userId}).populate("userId" , "username")//populate("which user" , "what informations u want for eg "username password". in default all fields will come")
    res.json({
        // title:data.title,
        // link : data.link,
        // tag : data.tags
        data : data
    })

})
contentRouter.put("/delete" , async(req,res)=>{

})
module.exports = {contentRouter}