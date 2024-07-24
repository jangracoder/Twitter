import dotenv from "dotenv";
import  express  from "express";
import databsaeConnection from "./config/database.js";

import cookieParser from "cookie-parser";
import userRouter from "./routes/userRoutes.js";

dotenv.config();

databsaeConnection();
const app =express();


const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({
    extended:true
}))

app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/user",userRouter)

app.get('/',(req,res)=>{
    res.send('hi')
})
app.get("/home",(req,res)=>{
    res.status(200).send({
        messgae:"coming from backend"
    })
})

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})

