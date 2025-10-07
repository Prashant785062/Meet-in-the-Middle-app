import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { sendSMS } from "../server.js";


const tempUsers = new Map();

const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

/* 
  Function: registerUser
  Process:
  1. Check if username, password, and phone are provided.
  2. Check if the user already exists.
  3. Generate OTP and expiry time.
  4. Store temporary user data in memory (Map).
  5. Send OTP to user's phone.
*/
export const registerUser = async (req, res) => {
  try {
    const { username, password, phone } = req.body;

    // Step 1
    if (!username || !password || !phone)
      return res.status(400).json({ message: "Username, password, and phone are required" });

    // Step 2
    const existingUser = await User.findOne({ $or: [{ username }, { phone }] });
    if (existingUser)
      return res.status(400).json({ message: "Username or phone already exists" });

    // Step 3
    const otp = generateOTP();
    const otpExpiry = new Date(Date.now() + 5 * 60 * 1000);

    // Step 4
    tempUsers.set(phone, { username, password, otp, otpExpiry });

    // Step 5
    await sendSMS(phone, `Your OTP for Meet in the Middle App is ${otp}`);
    console.log(`Generated OTP for login (${phone}): ${otp}`);

    res.status(200).json({ message: "OTP sent successfully", phone });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


/* 
  Function: verifyOTP
  Process:
  1. Validate phone and OTP.
  2. Verify if OTP matches and not expired.
  3. If new user hash password and create user.
  4. If existing user just verify and issue token.
*/
export const verifyOTP = async (req, res) => {
  try {
    const { phone, otp } = req.body;

    //  1
    if (!phone || !otp)
      return res.status(400).json({ message: "Phone and OTP are required" });

    //  2
    const tempUser = tempUsers.get(phone);
    if (!tempUser)
      return res.status(404).json({ message: "No OTP request found for this phone" });

    //  3
    if (tempUser.otp !== otp || tempUser.otpExpiry < new Date())
      return res.status(400).json({ message: "Invalid or expired OTP" });

    let newUser;

    //  4
    if (tempUser.username && tempUser.password) {
      const hashedPassword = await bcrypt.hash(tempUser.password, 10);

      // Create new verified user
      newUser = await User.create({
        username: tempUser.username,
        password: hashedPassword,
        phone,
        isVerified: true,
      });
    } else {
      // If user came from login (no username/password)
      newUser = await User.findOne({ phone });
      if (!newUser) {
        return res.status(404).json({ message: "User not found. Please signup first." });
      }
    }

    //  5
    tempUsers.delete(phone);

    //  6: Generate a JWT token for authenticated user
    const token = jwt.sign(
      { id: newUser._id, username: newUser.username, phone: newUser.phone },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    console.log(`OTP for ${phone}: ${otp}`);

    //  7
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


/* 
  Function: loginUser
  Process:
  1. Check if phone is provided.
  2. Verify that user exists.
  3. Generate OTP and store it temporarily.
  4. Send OTP via SMS.
*/
export const loginUser = async (req, res) => {
  try {
    const { phone } = req.body;

    //  1
    if (!phone) return res.status(400).json({ message: "Phone is required" });

    //  user exists
    const user = await User.findOne({ phone });
    if (!user) return res.status(404).json({ message: "User not found. Please register first." });


    const otp = generateOTP();
    const otpExpiry = new Date(Date.now() + 5 * 60 * 1000);

    //  4 Save temporary 
    tempUsers.set(phone, { otp, otpExpiry });

    //  5 Send OTP to user’s phone
    await sendSMS(phone, `Your OTP for login to Meet in the Middle App is ${otp}`);
    console.log(`Generated OTP for login (${phone}): ${otp}`);

    res.status(200).json({ message: "OTP sent for login", phone });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
