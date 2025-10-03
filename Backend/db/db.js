import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Connect to MongoDB using the URI from .env
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected successfully!");
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1); // Exit the app if DB connection fails
  }
};

export default connectDB;
