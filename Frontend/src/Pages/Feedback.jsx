import { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Box,
  Rating,
  Snackbar,
  Alert,
} from "@mui/material";

export default function Feedback() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(true);
    console.log({ rating, feedback });
    setRating(0);
    setFeedback("");
  };

  const handleClose = () => setOpen(false);

  return (
    <Container maxWidth="md" className="py-10 px-4 sm:px-6 md:px-12 lg:px-20">
      <Paper elevation={3} className="p-6 sm:p-8 md:p-10 rounded-xl">
        <Typography variant="h4" align="center" gutterBottom className="font-bold text-2xl sm:text-3xl md:text-4xl">
          Share Your Feedback
        </Typography>

        <Typography variant="body1" align="center" gutterBottom className="text-gray-600 mb-6 sm:mb-8 md:mb-10">
          We value your thoughts! Tell us what you think about the app and how we can improve.
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 sm:gap-6 md:gap-8"
        >
          <Box className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6">
            <Typography variant="subtitle1" className="text-base sm:text-lg md:text-xl">Rate us:</Typography>
            <Rating
              name="feedback-rating"
              value={rating}
              onChange={(e, newValue) => setRating(newValue)}
              size="large"
            />
          </Box>

          <TextField
            label="Your Feedback"
            multiline
            rows={4}
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
            fullWidth
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            className="py-2 sm:py-3 md:py-4"
          >
            Submit Feedback
          </Button>
        </Box>
      </Paper>

      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Thank you for your feedback!
        </Alert>
      </Snackbar>
    </Container>
  );
}
