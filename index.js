const express = require("express")
const app = express();


app.get("/",(req,res)=>{
    res.send("data sended")
})



app.listen(5000,(err)=>{
    if (err) {
        console.log(err);
    }
    console.log("Server start on port 5000")
})
