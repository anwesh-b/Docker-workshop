const express = require('express');
const app = express();
const port = 3000;
app.get('/',(req,res)=>{
    // var date = new Date();
    res.send("Server running");
    //console.log("Requet at ",date.getFullYear(),date.getMonth(),date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds())
})

app.listen(port,()=> console.log(`Server running at port ${port}`));