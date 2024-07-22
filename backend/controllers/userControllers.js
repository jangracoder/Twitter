import { User } from "../models/userSchema";
import bcrypt from "bcryptjs"

export const Register= async ()=>{
    try{
        const {name,username,email,password}=req.body;
        if(!name || !username || !email || !password){
            return res.status(401).json({
                    message:"All fields are required",
                    success:false
            })
        }

        


        const user = await User.findOne(email);
        if(user){
            return res.status(401).json({
                message:"User alreadt exists",
                status:false
            })
        }
        const hashedPassword = await bcrypt.hash(password,16);
        await user.create({
            name,
            username,
            email,
            hashedPassword
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