import productmodel from "../models/product.model.js";
import { uploadfile } from "../services/storage.service.js";
export async function createproduct(req,res){

    const { title,description,priceAmount,priceCurrency} =req.body;
    const seller = req.user;

    const images = await Promise.all(req.files.map(async (file)=>{
        const result = await uploadfile({
            buffer:file.buffer,
            fileName:file.originalname
        })
        return { url: result.url }
    }))

    const product = await productmodel.create({
        title,
        description,
        price:{
            amount: Number(priceAmount),
            currency: priceCurrency || "INR"
        },
        images,
        seller:seller._id
    })
    res.status(201).json({
        message:"Product created successfully",
        success:true,
        product
    })
}

