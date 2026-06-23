import { Router } from "express";
import { validateRegisterUser, validateloginuser } from "../validator/auth.validator.js";
import { register, login, googlecallback } from "../controllers/auth.controller.js";
import passport from "passport";

const router = Router();
 
router.post("/register",validateRegisterUser,register)

router.post("/login", validateloginuser, login)

router.get("/google",
    passport.authenticate("google",{scope:["profile","email"]}))

router.get("/google/callback",
    passport.authenticate("google", { session: false, failureRedirect: "http://localhost:5173" }),
    googlecallback
)




export default router;

