 const express = require("express");
 const bodyParser = require("body-parser")
 const port = 3001;
const app = express();

// const port = process.env.PORT || 3000
// app.use(bodyParser.json());
 app.get('/', (req,res)=>{

    // console.log(req.headers)
    // console.log(req.body)
    res.send("hello worlddd");

    // const message = req.body.message;
    // console.log(message)

    // res.json({
    //     output:"2 +2 =4"ṇ
    // })
 })

 app.listen(port,()=>{
    console.log("done pp")
 })
 function sum(){

 }