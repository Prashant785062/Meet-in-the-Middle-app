import User from "../models/User.js";
import jwt from "jsonwebtoken";

// Helper function to generate 6-digit OTP
const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

// @desc    Register user and send OTP
// @route   POST /api/auth/register
// @access  Public
export const registerUser = async (req, res) => {
  try {
    const { phone } = req.body;

    if (!phone) {
      return res.status(400).json({ message: "Phone number is required" });
    }

    // Check if user already exists
    let user = await User.findOne({ phone });

    // Generate OTP + expiry
    const otp = generateOTP();
    const otpExpiry = new Date(Date.now() + 5 * 60 * 1000); // 5 mins

    if (user) {
      // If user exists, update OTP
      user.otp = otp;
      user.otpExpiry = otpExpiry;
      await user.save();
    } else {
      // If new user, create one
      user = await User.create({ phone, otp, otpExpiry });
    }

    console.log("Generated OTP:", otp); // later replace with Twilio

    res.status(200).json({ message: "OTP sent successfully", phone });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Verify OTP and login
// @route   POST /api/auth/verify-otp
// @access  Public
export const verifyOTP = async (req, res) => {
  try {
    const { phone, otp } = req.body;

    if (!phone || !otp) {
      return res.status(400).json({ message: "Phone and OTP are required" });
    }

    const user = await User.findOne({ phone });

    if (!user) return res.status(404).json({ message: "User not found" });

    // Check if OTP is valid
    if (user.otp !== otp || user.otpExpiry < new Date()) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    // Mark user as verified
    user.isVerified = true;
    user.otp = null; // clear OTP
    user.otpExpiry = null;
    await user.save();

    // Generate JWT token
    const token = jwt.sign({ id: user._id, phone: user.phone }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    res.status(200).json({ message: "OTP verified", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Login existing user by sending OTP
// @route   POST /api/auth/login
// @access  Public
export const loginUser = async (req, res) => {
  try {
    const { phone } = req.body;

    if (!phone) return res.status(400).json({ message: "Phone is required" });

    let user = await User.findOne({ phone });

    if (!user) return res.status(404).json({ message: "User not found. Please register first." });

    // Generate new OTP + expiry
    const otp = generateOTP();
    const otpExpiry = new Date(Date.now() + 5 * 60 * 1000); // 5 mins

    user.otp = otp;
    user.otpExpiry = otpExpiry;
    await user.save();

    console.log("Login OTP:", otp); // later replace with Twilio

    res.status(200).json({ message: "OTP sent for login", phone });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
