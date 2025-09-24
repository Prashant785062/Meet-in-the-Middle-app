import { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import QuickLinks from "../Components/QuickLinks";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function SignupPage() {
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!accepted) return;
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[400px] p-8 border rounded-xl shadow-md bg-white gap-4"
      >
        <h5 className="text-xl font-semibold text-center mb-6">
          Create Your Account
        </h5>

        <TextField required id="outlined-username" label="Username" />
        <TextField
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />

        {/* Terms & Conditions Checkbox */}
        <FormControlLabel
          control={
            <Checkbox
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
            />
          }
          label={
            <span>
              I agree to the{" "}
              <Link
                to="/terms"
                className="text-blue-600 hover:underline"
                target="_blank"
              >
                <QuickLinks Name="Terms & Conditions" />
              </Link>
            </span>
          }
        />

        <Link to="/otp">
          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={!accepted}
          >
            Submit
          </Button>
        </Link>
        {/* Divider line */}
        <hr className="my-6 border-gray-300" />

        <p className="text-sm text-center">
          Already have an account?{" "}
          <Link to="/signin" className="text-blue-600 hover:underline">
            <QuickLinks Name="Sign in" />
          </Link>
        </p>

        <p className="text-xs text-center text-gray-500 mt-4">
          © 2025 by Prashant Patwa
        </p>
      </form>
    </div>
  );
}
