import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Connect  MongoDB to .env
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected successfully!");
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1); // Exit 
  }
};

export default connectDB;
