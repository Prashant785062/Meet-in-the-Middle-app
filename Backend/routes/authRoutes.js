import express from "express";
import { registerUser, verifyOTP, loginUser } from "../controllers/authController.js";

const router = express.Router();

// Signup - send OTP
router.post("/register", registerUser);

// Verify OTP - login/signup
router.post("/verify-otp", verifyOTP);

// Login - send OTP for existing users
router.post("/login", loginUser);

export default router;
