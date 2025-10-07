import express from "express";
import { registerUser, verifyOTP, loginUser } from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerUser); // sign-up 

router.post("/verify-otp", verifyOTP); // OTP 

router.post("/login", loginUser); // Login 

export default router;
