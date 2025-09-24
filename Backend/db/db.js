import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Read MongoDB URI from environment variables
    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1); // Stop server if DB connection fails
  }
};


// Export the function so server.js can import it
export default connectDB;
