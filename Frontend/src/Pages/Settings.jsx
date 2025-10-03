import { Alert, Container, Typography, Card, CardContent } from "@mui/material";

export default function Settings() {
  return (
    <Container maxWidth="lg" className="px-4 py-8">
      <Alert severity="info" className="mb-6">
        Settings will receive major upgrades after WebRTC and socket integration.
        Future improvements will include live meeting controls and collaboration options.
      </Alert>

      <Card className="shadow-md">
        <CardContent>
          <Typography
            variant="h5"
            gutterBottom
            className="text-center font-bold sm:text-lg md:text-xl lg:text-2xl"
          >
            Settings
          </Typography>
          <Typography
            variant="body1"
            className="text-gray-600 text-sm sm:text-base md:text-lg"
          >
            Customize your experience here. (Work in progress)
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
