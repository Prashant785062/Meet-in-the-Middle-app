import mongoose from "mongoose";

const meetingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  dateTime: { type: Date, required: true },
  location: { type: String, required: true },
  organizer: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: true 
  },
  invitations: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Invitation'
  }]
}, { timestamps: true });

const Meeting = mongoose.model('Meeting', meetingSchema);
export default Meeting;
