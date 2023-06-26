const User = require("../Model/User.model")


const UserController = {
    Index : (req,res)=>{
        try {
            const Users = User.find()
            res.json(Users)
        } catch (error) {
            res.status(405).json({error:"internal server error"})
        }
    },
    Store : (req,res)=>{
        try {
            const{_id,name,age,role} = req.body
            const data = new User (
                {
                    _id,
                    name,
                    age,
                    role
                }
            )
            data.save()
            res.status(200).json({msg:"data has been add successfuly"})
        } catch (error) {
            res.status(500).json({error:"errrrrrrrrrr"})
        }
    },
    Update:(req,res)=>{
        try {
            const {_id,name,age,role}=req.body
            const {idU}=req.params
            const data = User.update({_id:idU},{$set:{_id:_id,name:name,age:age,role:role}})
            data.save()
            res.status(200).json({msg:"data has been updated successfuly"})
        } catch (error) {
            res.status(500).json({error:"errrrrrrrrrrrrrr"})
        }
    },
    Delete:(req,res)=>{
        try {
            const {idU}=req.params
            const data = User.deleteOne({_id:idU})
            data.save()
            res.status(200).json({msg:"data has been deleted succussfuly"})            
        } catch (error) {
            res.status(500).json({error:"errrrrrrrrrrrrrrrrrr"})
        }

    }
}