import { Button, Box } from "@mui/material";

export default function MeetingCard({ invitation, onRespond }) {
  return (
    <Box className="p-4 border rounded-md flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white shadow-sm gap-3 sm:gap-0">
      <div className="flex-1">
        <h3 className="font-semibold text-lg">{invitation.meeting?.title || invitation.meetingTitle}</h3>
        <p className="text-gray-600">Status: {invitation.status}</p>
      </div>

      {invitation.status === "pending" && (
        <Box className="flex flex-col sm:flex-row gap-2 mt-2 sm:mt-0">
          <Button
            variant="contained"
            color="success"
            onClick={() => onRespond(invitation._id, "accept")}
            className="w-full sm:w-auto"
          >
            Accept
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => onRespond(invitation._id, "decline")}
            className="w-full sm:w-auto"
          >
            Decline
          </Button>
        </Box>
      )}
    </Box>
  );
}
