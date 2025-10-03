import { useState, useEffect } from "react";
import { TextField, Button, Box, Typography, Alert } from "@mui/material";
import { createMeeting } from "../api/meeting";
import { useNavigate } from "react-router-dom";

export default function CreateMeeting() {
  const [meetingData, setMeetingData] = useState({
    title: "",
    description: "",
    dateTime: "",
    location: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    try {
      if (user) {
        const parsed = JSON.parse(user);
        setUserId(parsed?._id || parsed?.id || parsed?.userId);
      } else if (token) {
        const payload = JSON.parse(atob(token.split(".")[1]));
        setUserId(payload?._id || payload?.id || payload?.userId);
      }
    } catch (err) {
      console.error("Error getting user ID:", err);
    }
  }, []);

  const handleSubmit = async () => {
    if (!meetingData.title || !meetingData.dateTime || !meetingData.location) {
      setError("Title, date, and location are required");
      return;
    }
    if (!userId) {
      setError("You must be logged in to create a meeting");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const formattedData = {
        title: meetingData.title.trim(),
        description: meetingData.description.trim(),
        dateTime: new Date(meetingData.dateTime).toISOString(),
        location: meetingData.location.trim(),
        createdBy: userId,
      };
      const res = await createMeeting(formattedData);
      if (res.success && res.meeting?._id) {
        navigate(`/invite-attendees/${res.meeting._id}`);
      } else {
        setError("Failed to create meeting");
      }
    } catch (err) {
      console.error("Error creating meeting:", err);
      setError(err.message || "Failed to create meeting");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeetingData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Box className="p-4 sm:p-6 md:p-8 max-w-md mx-auto bg-white rounded-xl shadow-md flex flex-col gap-4">
      <Typography variant="h5" className="font-bold text-center md:text-left">
        Create Meeting
      </Typography>
      {error && <Alert severity="error">{error}</Alert>}
      <TextField
        label="Title"
        name="title"
        value={meetingData.title}
        onChange={handleChange}
        required
        fullWidth
      />
      <TextField
        label="Description"
        name="description"
        value={meetingData.description}
        onChange={handleChange}
        fullWidth
        multiline
        rows={3}
      />
      <TextField
        label="Location"
        name="location"
        value={meetingData.location}
        onChange={handleChange}
        required
        fullWidth
      />
      <TextField
        type="datetime-local"
        label="Date and Time"
        name="dateTime"
        value={meetingData.dateTime}
        onChange={handleChange}
        required
        fullWidth
        InputLabelProps={{ shrink: true }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        disabled={
          !meetingData.title ||
          !meetingData.dateTime ||
          !meetingData.location ||
          loading
        }
        fullWidth
      >
        {loading ? "Creating..." : "Create Meeting"}
      </Button>
    </Box>
  );
}
