const express = require("express")
const route = express.Router()
const UserController = require("./Controller/UserController")


route.get("/",UserController.Index)
route.post("/store",UserController.Store)
route.put("/update/:idU",UserController.Store)
route.delete("/delete/idU",UserController.Store)


module.exports = route