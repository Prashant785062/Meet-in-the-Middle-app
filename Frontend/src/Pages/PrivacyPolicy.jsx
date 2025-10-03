import { Container, Typography, Button, Box } from "@mui/material";

export default function PrivacyPolicy() {
  return (
    <Container
      maxWidth="lg"
      className="min-h-screen bg-gray-50 flex flex-col items-center px-4 sm:px-6 lg:px-12 py-8"
    >
      <Typography
        variant="h3"
        className="font-bold text-gray-800 mb-6 text-center text-2xl sm:text-3xl md:text-4xl"
      >
        Privacy Policy
      </Typography>

      <Typography
        className="max-w-3xl text-center text-gray-600 mb-10 text-base sm:text-lg"
      >
        At <strong>Meet in the Middle</strong>, your privacy is our top
        priority. This Privacy Policy explains what data we collect, how we use
        it, and your rights regarding your information.
      </Typography>

      <Box className="max-w-3xl space-y-6">
        <div>
          <Typography
            variant="h5"
            className="font-semibold mb-2 text-xl sm:text-2xl"
          >
            Data Collection
          </Typography>
          <Typography className="text-gray-600 text-sm sm:text-base">
            We collect the minimum information necessary to provide our
            services, including your name, phone number, meeting details, and
            location data. This information is stored securely in our database.
          </Typography>
        </div>

        <div>
          <Typography
            variant="h5"
            className="font-semibold mb-2 text-xl sm:text-2xl"
          >
            How We Use Your Data
          </Typography>
          <Typography className="text-gray-600 text-sm sm:text-base">
            Your data is used to facilitate meeting scheduling, calculate
            location suggestions, manage invitations, and improve user
            experience. We never sell or share your personal data with third
            parties for marketing purposes.
          </Typography>
        </div>

        <div>
          <Typography
            variant="h5"
            className="font-semibold mb-2 text-xl sm:text-2xl"
          >
            Data Security
          </Typography>
          <Typography className="text-gray-600 text-sm sm:text-base">
            We implement industry-standard security measures to protect your
            information from unauthorized access, disclosure, or alteration.
            Your location data is only used for meeting suggestions and is not
            shared externally.
          </Typography>
        </div>

        <div>
          <Typography
            variant="h5"
            className="font-semibold mb-2 text-xl sm:text-2xl"
          >
            Your Rights
          </Typography>
          <Typography className="text-gray-600 text-sm sm:text-base">
            You have the right to access, update, or delete your personal
            information. You can also withdraw consent for location tracking at
            any time. To exercise these rights, please contact our support team.
          </Typography>
        </div>

        <div>
          <Typography
            variant="h5"
            className="font-semibold mb-2 text-xl sm:text-2xl"
          >
            Contact Us
          </Typography>
          <Typography className="text-gray-600 text-sm sm:text-base">
            If you have any questions or concerns regarding your privacy, please
            contact us at{" "}
            <strong>support@meetinthemiddle.com</strong>.
          </Typography>
        </div>
      </Box>

      <Box className="mt-12 text-center">
        <Button
          variant="contained"
          color="primary"
          href="/home"
          className="px-6 py-3 rounded-xl text-sm sm:text-base"
        >
          Back to Home
        </Button>
      </Box>
    </Container>
  );
}
