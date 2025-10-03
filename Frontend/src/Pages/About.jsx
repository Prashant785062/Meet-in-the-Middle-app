import { FaUsers, FaMapMarkedAlt, FaHandshake } from "react-icons/fa";
import { Box, Typography, Grid, Card } from "@mui/material";

export default function AboutUs() {
  return (
    <Box className="bg-gray-50 flex flex-col items-center p-6">
      <Typography variant="h3" className="text-center font-bold mb-6 sm:text-3xl md:text-4xl lg:text-5xl">
        About Meet in the Middle
      </Typography>

      <Typography className="max-w-3xl text-center text-gray-600 mb-10 text-base sm:text-lg md:text-lg lg:text-xl">
        Meet in the Middle is a dynamic web application designed to make organizing meetings simple and fair. Our platform calculates the most convenient meeting locations for all participants, ensuring that everyone has a balanced, hassle-free experience. Whether you are planning casual meetups or professional gatherings, our app is designed with efficiency, simplicity, and collaboration in mind.
      </Typography>

      <Grid container spacing={4} className="max-w-5xl w-full">
        <Grid item xs={12} md={4}>
          <Card className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
            <FaUsers className="text-4xl text-indigo-500 mb-4" />
            <Typography variant="h6" className="font-semibold mb-2">Easy Coordination</Typography>
            <Typography className="text-gray-600 text-sm sm:text-base md:text-base lg:text-base">
              Manage invitations, view participants, and track meeting details seamlessly.
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
            <FaMapMarkedAlt className="text-4xl text-green-500 mb-4" />
            <Typography variant="h6" className="font-semibold mb-2">Smart Location Suggestions</Typography>
            <Typography className="text-gray-600 text-sm sm:text-base md:text-base lg:text-base">
              Our app calculates the midpoint for attendees, suggesting fair and convenient meeting spots.
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center">
            <FaHandshake className="text-4xl text-yellow-500 mb-4" />
            <Typography variant="h6" className="font-semibold mb-2">Collaborative & Inclusive</Typography>
            <Typography className="text-gray-600 text-sm sm:text-base md:text-base lg:text-base">
              Designed to encourage collaboration, everyone’s preferences and locations are considered.
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
