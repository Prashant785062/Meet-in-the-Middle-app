import mongoose from "mongoose";

const invitationSchema = new mongoose.Schema({
  meeting: {
    type: mongoose.Schema.Types.ObjectId, //  it stores the _id of a Meeting document
    ref: "Meeting",  // Meeting collection.
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User",
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "accepted", "declined"], //status
    default: "pending",
  },
  responseDate: Date,
}, { timestamps: true }); 

const Invitation = mongoose.model("Invitation", invitationSchema);
export default Invitation;
