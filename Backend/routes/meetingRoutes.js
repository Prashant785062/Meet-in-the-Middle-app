import express from "express";
import { createMeeting, getMeetings } from "../controllers/meetingController.js";

const router = express.Router();

// Create a new meeting
router.post("/create", createMeeting);

// Get all meetings (for testing/frontend later)
router.get("/", getMeetings);

export default router;
