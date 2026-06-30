import express from "express";
import { authenticateSeller } from "../middlewares/auth.middle.js";
import { createproduct, getallproducts, getsellerproduct, imagekitAuth, getproductbyid } from "../controllers/product.controller.js";

const router = express.Router();

// Returns ImageKit signed auth params so the frontend can upload directly
router.get("/imagekit-auth", authenticateSeller, imagekitAuth);

// Create product — receives JSON body with imageUrls[] already uploaded to ImageKit
router.post("/", authenticateSeller, createproduct);

router.get("/seller", authenticateSeller, getsellerproduct);

router.get("/", getallproducts)

router.get("/:productId", getproductbyid)

export default router;