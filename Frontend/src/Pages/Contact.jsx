import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Icon from "../Components/Icon";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import ReviewsIcon from "@mui/icons-material/Reviews";
import Rating from "@mui/material/Rating";

export default function Contact() {
  return (
    <div className="py-24 px-4 sm:px-6 md:px-10 lg:px-20">

      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Contact Us</h1>
        <p className="text-gray-700 text-lg sm:text-xl">Any questions or remarks? Just write us a message!</p>
      </div>

      <Box className="flex flex-col gap-4 w-full max-w-xl mx-auto">
        <Box className="flex flex-col sm:flex-row gap-4">
          <Box className="flex-1">
            <label htmlFor="email" className="block mb-1 font-medium">Email:</label>
            <TextField id="email" variant="filled" placeholder="Enter your email" fullWidth />
          </Box>

          <Box className="flex-1">
            <label htmlFor="name" className="block mb-1 font-medium">Name:</label>
            <TextField id="name" variant="filled" placeholder="Enter your name" fullWidth />
          </Box>
        </Box>

        <Box>
          <label htmlFor="message" className="block mb-1 font-medium">Message:</label>
          <TextField
            id="message"
            variant="filled"
            placeholder="Write your message"
            multiline
            rows={4}
            fullWidth
          />
        </Box>

        <Button variant="contained" color="primary" size="large" fullWidth>
          Submit
        </Button>
      </Box>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-10 mt-12">
        <Icon icon={FmdGoodIcon} label="123 Main Street, City" />
        <Icon icon={PermPhoneMsgIcon} label="+91 XXXXX XXXXX" />
        <div className="flex flex-col items-center gap-2">
          <Icon icon={ReviewsIcon} />
          <Rating />
        </div>
      </div>

    </div>
  );
}
