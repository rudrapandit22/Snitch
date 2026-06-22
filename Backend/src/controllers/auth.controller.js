import usermodel from "../models/user.model.js";
import jwt from "jsonwebtoken";

async function sendtokenresponse(user,res){
    const token = jwt({

        id:user._id,},
        config.JWT_SECRET,{
            expiresIn:"7d"
        })
        
        res.cookie("token",token)


        res.status(200).json({
            message,
            success:true,
            user:{
                id: user._id,
                email:user.email,
                contact:user.contact,
                fullname:user.fullname,
                role:user.role
            }
        })

    
}

export const register = async (req,res)=>{
    const {email,contact,password,fullname,isSeller} = req.body;

    try{
        const existinguser = await usermodel.findOne({
            $or:[
                {email},
                {contact}
            ]
        })
        if(existinguser){
            return res.status(400).json({message:"User with this email or contact already exists"})
        }

        const user = await usermodel.create({
            email,contact,password,fullname,role:isSeller?"seller" : "buyer"

        })

        await sendtokenresponse(user,res,"user registered sucessfully") 



    }

    catch(error){
        console.log(error)
        return res.status(400).json({message:"Server error"});
    }
}