import { useEffect, useState } from "react";
import { getUserInvitations, respondInvitation } from "../api/meeting";
import MeetingCard from "../Components/MeetingCard";
import { Typography, Box, Grid } from "@mui/material";

export default function InvitationList({ userId }) {
  const [invitations, setInvitations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchInvites() {
      if (!userId) {
        setError('User ID is required');
        setLoading(false);
        return;
      }
      try {
        const response = await getUserInvitations(userId);
        if (response?.success && Array.isArray(response.invitations)) {
          setInvitations(response.invitations);
        } else {
          setInvitations([]);
          setError('Invalid response format');
        }
      } catch (err) {
        setError(err.message || 'Failed to fetch invitations');
        setInvitations([]);
      } finally {
        setLoading(false);
      }
    }
    fetchInvites();
  }, [userId]);

  const handleResponse = async (invId, response) => {
    try {
      const result = await respondInvitation(invId, response);
      if (result?.success) {
        setInvitations(prev =>
          prev.map(i =>
            i._id === invId
              ? { ...i, status: response === "accept" ? "accepted" : "declined" }
              : i
          )
        );
      }
    } catch (err) {
      setError(err.message || 'Failed to respond to invitation');
    }
  };

  if (loading) return (
    <Typography className="text-center mt-4">Loading invitations...</Typography>
  );

  return (
    <Box className="p-4 max-w-3xl mx-auto">
      <Typography variant="h5" className="font-bold mb-4 text-center">My Invitations</Typography>
      {error && <Typography color="error" className="mb-4 text-center">{error}</Typography>}
      {!loading && invitations.length === 0 && (
        <Typography color="textSecondary" className="text-center">No invitations pending.</Typography>
      )}
      <Grid container spacing={3}>
        {invitations.map(inv => (
          <Grid item xs={12} sm={6} md={4} key={inv._id}>
            <MeetingCard invitation={inv} onRespond={handleResponse} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
