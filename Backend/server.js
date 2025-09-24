// backend/server.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";


dotenv.config();

const app = express();
app.use(express.urlencoded({ extended:  false}))
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);


app.get("/signin", (req, res) => {
  res.send("API is running...");
});

app.get("/signin", (req, res) => {
  res.send("API is running...");
});

app.get("/signin", (req, res) => {
  res.send("API is running...");
});


// Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("DB connection failed:", err));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
