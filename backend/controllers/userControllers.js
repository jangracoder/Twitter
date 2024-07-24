import { User } from "../models/userSchema.js";
import bcrypt from "bcryptjs"

export const Register= async (req,res)=>{
    try{
        const {name,username,email,password}=req.body;
        if(!name || !username || !email || !password){
            return res.status(401).json({
                    message:"All fields are required",
                    success:false
            })
        }
        
        const user = await User.findOne({email});
        if(user){
            return res.status(401).json({
                message:"User already exists",
                status:false
            })
        }
        const hashedPassword = await bcrypt.hash(password,16);
        await User.create({
            name,
            username,
            email,
            password:hashedPassword
        })

        return res.status(201).json({
            message:"Account created successfully",
            success:true
        })

    }

   catch(err){
    console.log(err)
   }

}

