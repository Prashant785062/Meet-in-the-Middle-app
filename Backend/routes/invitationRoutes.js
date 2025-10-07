import express from "express";
import { respondInvitation, sendInvitations, getUserInvitations } from "../controllers/invitationController.js";

const router = express.Router();

router.post("/send", sendInvitations);

router.patch("/:id/:response", respondInvitation); // patch -- Updates only the specific fields you provide in the request.

router.get("/user/:userId", getUserInvitations);

export default router;
