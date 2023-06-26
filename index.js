const express = require("express")
const app = express();
const connectionDb =require( "./db");


app.get("/",(req,res)=>{
    res.send("data sended")
})

connectionDb();

app.listen(5000,(err)=>{
    if (err) {
        console.log(err);
    }
    console.log("Server start on port 5000")
})
