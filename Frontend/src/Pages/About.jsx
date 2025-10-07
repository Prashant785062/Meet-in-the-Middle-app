import { FaUsers, FaMapMarkedAlt, FaHandshake } from "react-icons/fa";
import { Box, Typography, Card } from "@mui/material";

export default function AboutUs() {
  return (
    // Main container
    <Box className="bg-gray-50 flex flex-col items-center p-6 ">

      {/* Page Title */}
      <Typography 
        variant="h3" 
        className="text-center font-bold mb-6 sm:text-3xl md:text-4xl lg:text-5xl"
      >
        About Meet in the Middle
      </Typography>

      {/* Page Description */}
      <Typography 
        className="max-w-3xl text-center text-gray-600 mb-10 text-base sm:text-lg"
      >
        Meet in the Middle helps organize meetings fairly and efficiently. It calculates the best location for everyone and makes coordination simple.
      </Typography>

      {/* Features */}
      <div className="flex flex-col sm:flex-row justify-center items-start gap-4 max-w-6xl w-full">
        
        {/*  1 */}
        <Card className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center gap-3 flex-1 h-52">
          <div>
          <FaUsers className="text-4xl text-indigo-500 text-center" />
          </div>
          <div>
            <Typography variant="h6" className="font-semibold text-center">
              Easy Coordination
            </Typography>
            <Typography className="text-gray-600 text-sm">
               Manage participants, invitations, schedules, and all meeting details easily and efficiently.
            </Typography>
          </div>
        </Card>

        {/*  2 */}
        <Card className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center gap-3 flex-1 h-52">
          <div> 
          <FaMapMarkedAlt className="text-4xl text-green-500" />
          </div>
          <div>
            <Typography variant="h6" className="font-semibold">
              Smart Location Suggestions
            </Typography>
            <Typography className="text-gray-600 text-sm">
  Calculates the midpoint locations for all attendees, making meetings fair, convenient, and easy to reach for everyone.
            </Typography>
          </div>
        </Card>

        {/*  3 */}
        <Card className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center gap-3 flex-1">
          <div>
          <FaHandshake className="text-4xl text-yellow-500" />
          </div>
          <div>
            <Typography variant="h6" className="font-semibold">
              Collaborative & Inclusive
            </Typography>
            <Typography className="text-gray-600 text-sm">
  Everyone’s preferences and locations are taken into account, making meetings collaborative, inclusive, and easy for all participants.
            </Typography>
          </div>
        </Card>

      </div>
    </Box>
  );
}
