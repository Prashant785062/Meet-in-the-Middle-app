import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connectDB from "./db/db.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import meetingRoutes from "./routes/meetingRoutes.js";
import invitationRoutes from "./routes/invitationRoutes.js";
import twilio from "twilio";

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to database
connectDB();

// Middleware
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/meetings", meetingRoutes);
app.use("/api/invitations", invitationRoutes);

// Twilio client setup
const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);
export const sendSMS = async (to, body) => {
  try {
    const result = await twilioClient.messages.create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to,
      body,
    });
    console.log("SMS sent:", result.sid);
  } catch (error) {
    console.error("Twilio Error:", error.message);
  }
};

// Root route
app.get("/", (req, res) => {
  res.send("Home Page - Meet in the Middle App API running!");
});

// Error handling middleware (optional)
app.use((err, req, res, next) => {
  console.error("Server Error:", err);
  res.status(err.status || 500).json({ success: false, message: err.message || "Server Error" });
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
