import dotenv from "dotenv"
import mongoose from "mongoose"
dotenv.config();

const databsaeConnection =()=>{
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log("connected to databse")
    }

    ).catch((err)=>{
        console.log(err)
    }

    )
}

export default databsaeConnection