import express, { Router } from "express";
import { authenticateSeller } from "../middlewares/auth.middle.js";
import { createproduct } from "../controllers/product.controller.js";
import multer from "multer";

const upload = multer({
    storage:multer.memoryStorage(),
    limits:{
        fileSize:5*1024*1024
    }
})

const router = express.Router();


router.post("/",authenticateSeller,upload.array('images',7),createproduct)

export default router;