import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { sendSMS } from "../server.js";

// Temporary in-memory store for signup OTPs
const tempUsers = new Map(); // key: phone, value: { username, password, otp, otpExpiry }

const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

// REGISTER - Step 1: Collect username/password/phone and send OTP
export const registerUser = async (req, res) => {
  try {
    const { username, password, phone } = req.body;
    if (!username || !password || !phone)
      return res.status(400).json({ message: "Username, password, and phone are required" });

    // Check if user already exists in DB
    const existingUser = await User.findOne({ $or: [{ username }, { phone }] });
    if (existingUser)
      return res.status(400).json({ message: "Username or phone already exists" });

    // Generate OTP and expiry
    const otp = generateOTP();
    const otpExpiry = new Date(Date.now() + 5 * 60 * 1000); // 5 mins

    // Store in temporary memory
    tempUsers.set(phone, { username, password, otp, otpExpiry });

    // Send OTP via Twilio
    await sendSMS(phone, `Your OTP for Meet in the Middle App is ${otp}`);
  console.log(`Generated OTP for login (${phone}): ${otp}`);

    res.status(200).json({ message: "OTP sent successfully", phone });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// VERIFY OTP - Step 2: Validate OTP and save user in DB
export const verifyOTP = async (req, res) => {
  try {
    const { phone, otp } = req.body;
    if (!phone || !otp)
      return res.status(400).json({ message: "Phone and OTP are required" });

    // Check OTP in temporary storage
    const tempUser = tempUsers.get(phone);
    if (!tempUser)
      return res.status(404).json({ message: "No OTP request found for this phone" });

    if (tempUser.otp !== otp || tempUser.otpExpiry < new Date())
      return res.status(400).json({ message: "Invalid or expired OTP" });

    let newUser;

    if (tempUser.username && tempUser.password) {
      // This is a signup flow: hash password and save user
      const hashedPassword = await bcrypt.hash(tempUser.password, 10);

      newUser = await User.create({
        username: tempUser.username,
        password: hashedPassword,
        phone,
        isVerified: true,
      });
    } else {
      // This is a login flow: find existing user
      newUser = await User.findOne({ phone });
      if (!newUser) {
        return res.status(404).json({ message: "User not found. Please signup first." });
      }
    }

    // Remove from temporary store
    tempUsers.delete(phone);

    // Generate JWT
    const token = jwt.sign(
      { id: newUser._id, username: newUser.username, phone: newUser.phone },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    console.log(`OTP for ${phone}: ${otp}`);

    // Return token AND user object so frontend can persist userId and user details
    res.status(200).json({
      message: "OTP verified",
      token,
      user: {
        _id: newUser._id,
        username: newUser.username,
        phone: newUser.phone,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


// LOGIN - Step 3: Send OTP for existing users

export const loginUser = async (req, res) => {
  try {
    const { phone } = req.body;
    if (!phone) return res.status(400).json({ message: "Phone is required" });

    const user = await User.findOne({ phone });
    if (!user) return res.status(404).json({ message: "User not found. Please register first." });

    const otp = generateOTP();
    const otpExpiry = new Date(Date.now() + 5 * 60 * 1000);

    // Store OTP temporarily (can also store in DB if you want persistent OTP)
    tempUsers.set(phone, { otp, otpExpiry });

    await sendSMS(phone, `Your OTP for login to Meet in the Middle App is ${otp}`);
  console.log(`Generated OTP for login (${phone}): ${otp}`);

    res.status(200).json({ message: "OTP sent for login", phone });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
