const express=require("express");
const cors=require("cors");
const app=express();

app.use(cors());

const username="nakshatra123";
const password=123456;

app.get("/login",(req,res)=>{
    if(req.query.username===username && Number(req.query.password)=== password){
        res.send(true);
    }
    else{
        res.send(false)
    }
});

//Use dynamic port for Render
const PORT = process.env.PORT || 4000;
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});