import { Alert, Container, Typography, Card, CardContent } from "@mui/material";

export default function Profile() {
  return (
    <Container maxWidth="lg" className="px-4 py-8">
      <Alert severity="info" className="mb-6">
        Profile features will be upgraded after integration of WebRTC and socket-based
        functionalities. Stay tuned for enhanced real-time interactions.
      </Alert>

      <Card className="shadow-md">
        <CardContent>
          <Typography
            variant="h5"
            gutterBottom
            className="text-center font-bold sm:text-lg md:text-xl lg:text-2xl"
          >
            Profile
          </Typography>
          <Typography
            variant="body1"
            className="text-gray-600 text-sm sm:text-base md:text-lg"
          >
            Basic profile details go here. (Work in progress)
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
