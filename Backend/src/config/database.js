import mongoose from "mongoose"
import { config } from "./config.js";

const connectdb = async ()=>{
    const mongoURI = process.env.MONGO_URI;

    if(!mongoURI){
        throw new Error("MONGO_URI is not defined in eviroment variables")
    }

    await mongoose.connect(mongoURI);
    console.log("Mongodb connected");


}

export default connectdb;