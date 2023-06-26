const express = require("express")
const app = express();
const connectionDb =require( "./db");
const UserRouter = require("./routes")

app.use(express.json())
app.use("/",UserRouter)

connectionDb();

app.listen(5000,(err)=>{
    if (err) {
        console.log(err);
    }
    console.log("Server start on port 5000")
})
