import Meeting from "../models/Meeting.js";

export const createMeeting = async (req, res) => {
  try {
    const { title, description, dateTime, organizer, location } = req.body;

    if (!title || !dateTime || !organizer || !location) {
      return res.status(400).json({ 
        success: false, 
        message: "Missing required fields: title, dateTime, organizer, or location" 
      });
    }

    const meeting = new Meeting({
      title,
      description,
      dateTime,
      organizer,
      location
    });

    await meeting.save();

    res.status(201).json({ 
      success: true, 
      meeting,
      message: "Meeting created successfully" 
    });
  } catch (error) {
    console.error("❌ Error creating meeting:", error);
    res.status(500).json({ 
      success: false, 
      message: error.message || "Failed to create meeting" 
    });
  }
};

export const getMeetings = async (req, res) => {
  try {
const meetings = await Meeting.find().populate("organizer", "name phone");
    res.json({ success: true, meetings });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
