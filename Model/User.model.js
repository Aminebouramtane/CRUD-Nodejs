const mongoose = require("mongoose")


const userScheema =new mongoose.Schema({
    _id:Number,
    name:String,
    age:Number,
    role:Boolean
})

const user = mongoose.model("users",userScheema)
module.exports = user