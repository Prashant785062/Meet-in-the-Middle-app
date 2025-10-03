import { useState } from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { mockMeetings } from "../mockData";

export default function AdminDashboard() {
  const [meetings] = useState(mockMeetings);

  return (
    <Box className="p-4 sm:p-6 md:p-10">
      <Typography variant="h4" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
        Admin Dashboard
      </Typography>

      <Grid container spacing={4}>
        {meetings.map((meeting) => (
          <Grid item xs={12} sm={6} md={4} key={meeting.id}>
            <Card className="p-4 bg-purple-100 rounded-lg shadow-md">
              <CardContent>
                <Typography variant="h6" className="font-semibold mb-2">
                  {meeting.title}
                </Typography>
                <Typography variant="body2" className="text-gray-700 mb-1">
                  Date: {new Date(meeting.date).toLocaleString()}
                </Typography>
                <Typography variant="body2" className="text-gray-700">
                  Participants: {meeting.participants.join(", ")}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
