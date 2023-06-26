const User = require("../Model/User.model")


const UserController = {
    Index : async (req,res)=>{
        try {
            const Users =await User.find()
            res.json(Users)
        } catch (error) {
            res.status(405).json({error:"internal server errorrrrrr"})
        }
    },
    Store: async (req, res) => {
        try {
            const {_id, name, age, role } = req.body;
            const user = new User({
                _id,
                name,
                age,
                role
            });
            await user.save();
            res.status(200).json({ msg: "Data has been added successfully" });
        } catch (error) {
            res.status(500).json({ error: "Internal server error" });
        }
    },
    
    Update: async (req,res)=>{
        try {
            const {_id,name,age,role}=req.body
            const {idU}=req.params
            const data = User.update({_id:idU},{$set:{_id:_id,name:name,age:age,role:role}})
            await data.save()
            res.status(200).json({msg:"data has been updated successfuly"})
        } catch (error) {
            res.status(500).json({error:"errrrrrrrrrrrrrr"})
        }
    },
    Delete: async (req,res)=>{
        try {
            const {idU}=req.params
            const data = User.deleteOne({_id:idU})
            await data.save()
            res.status(200).json({msg:"data has been deleted succussfuly"})            
        } catch (error) {
            res.status(500).json({error:"errrrrrrrrrrrrrrrrrr"})
        }
    }
}

module.exports = UserController;