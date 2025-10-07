import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }, 
  phone: { type: String, required: true, unique: true },
  otp: { type: String },
  otpExpiry: { type: Date },
  isVerified: { type: Boolean, default: false },
}, { timestamps: true });  // Automatically adds 'createdAt' and 'updatedAt' fields to track document history

const User = mongoose.model("User", userSchema);
export default User;

