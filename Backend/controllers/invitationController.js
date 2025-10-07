import Meeting from '../models/Meeting.js';
import Invitation from '../models/Invitation.js';
import mongoose from 'mongoose';


/* sendInvitations */

export const sendInvitations = async (req, res) => {
  const session = await mongoose.startSession(); // Start a MongoDB session (used for transactions)
  session.startTransaction(); // Begin a new transaction inside this session

  try {
    const { meetingId, userIds } = req.body; 

    if (!meetingId || !userIds?.length) {
      return res.status(400).json({
        success: false,
        message: 'Meeting ID and at least one user ID are required'
      });
    }

    // Check if the meeting exists in the database
    const meeting = await Meeting.findById(meetingId);
    if (!meeting) {
      return res.status(404).json({
        success: false,
        message: 'Meeting not found'
      });
    }

    // Create invitation entries for each user
    const invitations = [];
    for (const userId of userIds) {  
      const invitation = await Invitation.create([{
        meeting: meetingId,
        user: userId,
        status: 'pending'
      }], { session });

      invitations.push(invitation[0]);
    }

    //  update the Meeting document to include the created invitations
    await Meeting.findByIdAndUpdate(
      meetingId,
      { 
        $push: { 
          invitations: { 
            // $each allows pushing multiple items at once
            // invitations.map(inv => inv._id) extracts only the _id from each invitation
            $each: invitations.map(inv => inv._id) 
          } 
        } 
      },
      { session } 
    );

    // Commit 
    await session.commitTransaction();

    // Send response to client
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


/*  respondInvitation */

export const respondInvitation = async (req, res) => {
  console.log("respondInvitation called with params:", req.params); // params - url part

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
    await invitation.save(); // Save updated invitation to database

    res.json({ success: true, message: `Invitation ${response}ed`, invitation });

  } catch (error) {
    console.error("Error responding to invitation:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};


/*  getUserInvitations */
export const getUserInvitations = async (req, res) => {
  try {
    const { userId } = req.params; 

    if (!userId) {
      return res.status(400).json({ success: false, message: "User ID is required" });
    }

    // .populate() is used to replace the 'meeting' field with actual meeting details
    const invitations = await Invitation.find({ user: userId })
      .populate("meeting", "title dateTime createdBy"); 

    res.json({ success: true, invitations });

  } catch (error) {
    console.error("Error fetching user invitations:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};
