const express = require("express"); 

const app = express();



 const user =[{

    namee:"harsh",
    meta:[{
        kideney:false
    }]
 }]

 app.use(express.json());
app.get("/", (req,res) =>{
  const kid = user[0].meta;
//   const num = kideney.lenght;

res.json({
    kid
})

})


app.post("/", (req,res)=>{
    const ishealth =req.body.ishealth;
    user[0].meta.push({
        age:ishealth
    })
  res.json({
    msg:"done"
  })
})


app.put("/",  (req,res)=>{

    for (let i=0;i<user[0].meta.length;i++){
        user[0].meta[i].age=false;
    }

    res.json({});
})

app.delete("/", (req,res) =>{
    const newww =[];

    for(let i =0;i<user[0].meta.length;i++){
        if(user[0].meta[i].age) {
            newww.push({
                age:true
            })
        }
    }

    user[0].meta =newww;
    res.json({
        msg:"done"
    })
})
app.listen(3002);