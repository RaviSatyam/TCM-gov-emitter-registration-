require("dotenv").config();
const express=require("express");
const app=express();
app.use(express.json());//-----

const connectDB=require("./db/connect");
const PORT=process.env.PORT || 5000;

const emitter_routes=require("./routes/routes");

// app.get("/",(req,res)=>{
//    res.send("Hi, I'm live");
// })


// middleware or to set router
app.use("/api/user",emitter_routes);

const start=async()=>{
    try{
     await connectDB(process.env.PROJECT_TCM2_DB);
     app.listen(PORT,()=>{
        console.log(`PORT No:${PORT} is connected !`);
     })
    }catch(error){
        console.log(error);
    }
}
start();