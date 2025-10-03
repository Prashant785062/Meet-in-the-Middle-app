import express from "express";
import { registerUser, verifyOTP, loginUser } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerUser); //signin 

router.post("/verify-otp", verifyOTP); //otp 

router.post("/login", loginUser); //signup 

export default router;
