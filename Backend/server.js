// backend/server.js
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();

// 🔑 wrap express with HTTP server
const httpServer = createServer(app);

// 🔑 attach socket.io to that HTTP server
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173", // React frontend
    methods: ["GET", "POST"]
  }
});

// Socket.IO events
io.on("connection", (socket) => {
  console.log("✅ Client connected:", socket.id);

  socket.on("message", (msg) => {
    console.log("📩 Message:", msg);
    socket.emit("reply", `Echo: ${msg}`);
  });

  socket.on("disconnect", () => {
    console.log("❌ Client disconnected:", socket.id);
  });
});

// normal REST route still works
app.get("/", (req, res) => {
  res.send("Hello from Express + Socket.IO 🚀");
});

// start server
httpServer.listen(5000, () => {
  console.log("🚀 Server + Socket.IO running at http://localhost:5000");
});
