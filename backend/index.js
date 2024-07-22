import dotenv from "dotenv";
import  express  from "express";
import databsaeConnection from "./config/database.js";
dotenv.config();

databsaeConnection();
const app =express();


const PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send('hi')
})

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})

