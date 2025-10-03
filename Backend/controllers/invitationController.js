import Meeting from '../models/Meeting.js';
import Invitation from '../models/Invitation.js';
import mongoose from 'mongoose';


export const sendInvitations = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { meetingId, userIds } = req.body;

    // Validate input
    if (!meetingId || !userIds?.length) {
      return res.status(400).json({
        success: false,
        message: 'Meeting ID and at least one user ID are required'
      });
    }

    // Verify meeting exists
    const meeting = await Meeting.findById(meetingId);
    if (!meeting) {
      return res.status(404).json({
        success: false,
        message: 'Meeting not found'
      });
    }

    // Create invitations one by one within the transaction
    const invitations = [];
    for (const userId of userIds) {
      const invitation = await Invitation.create([{
        meeting: meetingId,
        user: userId,
        status: 'pending'
      }], { session });
      invitations.push(invitation[0]);
    }

    // Update meeting with new invitation IDs
    await Meeting.findByIdAndUpdate(
      meetingId,
      { 
        $push: { 
          invitations: { 
            $each: invitations.map(inv => inv._id) 
          } 
        } 
      },
      { session }
    );

    await session.commitTransaction();

    res.status(201).json({
      success: true,
      message: 'Invitations sent successfully',
      invitations
    });

  } catch (error) {
    await session.abortTransaction();
    console.error('Error sending invitations:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to send invitations'
    });
  } finally {
    session.endSession();
  }
};

// Respond to invitation (accept/decline)
export const respondInvitation = async (req, res) => {
     console.log("🔥 respondInvitation called with params:", req.params);
  try {
    const { id, response } = req.params;

    if (!["accept", "decline"].includes(response)) {
      return res.status(400).json({ success: false, message: "Invalid response" });
    }

    const invitation = await Invitation.findById(id);
    if (!invitation) {
      return res.status(404).json({ success: false, message: "Invitation not found" });
    }

    invitation.status = response === "accept" ? "accepted" : "declined";
    await invitation.save();

    res.json({ success: true, message: `Invitation ${response}ed`, invitation });
  } catch (error) {
    console.error("❌ Error responding invitation:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};


// Get all invitations for a specific user
// Get all invitations for a specific user
export const getUserInvitations = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).json({ success: false, message: "User ID is required" });
    }

    const invitations = await Invitation.find({ user: userId })
      .populate("meeting", "title dateTime createdBy"); // use correct field

    res.json({ success: true, invitations });
  } catch (error) {
    console.error("❌ Error fetching user invitations:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

