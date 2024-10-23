const express = require("express");
const app = express();
const port = 4000;

app.listen(port, ()=>{
    console.log("Server has started on port:",port)
})



console.log("This is just a test")