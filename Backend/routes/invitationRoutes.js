import express from "express";
import { respondInvitation, sendInvitations, getUserInvitations } from "../controllers/invitationController.js";

const router = express.Router();

// Send invitations
router.post("/send", sendInvitations);

// Respond to invitation
router.patch("/:id/:response", respondInvitation);

// Get all invitations for a specific user
router.get("/user/:userId", getUserInvitations);

export default router;
