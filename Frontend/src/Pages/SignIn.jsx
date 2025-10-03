import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Alert from "@mui/material/Alert";
import { loginUser } from "../api/auth";

export default function SigninPage() {
  const [phone, setPhone] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!phone || !accepted) {
      setError("Please enter your phone number and accept Terms & Conditions.");
      return;
    }

    setLoading(true);

    try {
      await loginUser({ phone });
      navigate("/otp", { state: { phone } });
    } catch (err) {
      setError(err.response?.data?.message || "Failed to send OTP. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const isSubmitDisabled = !phone || !accepted || loading;

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50 px-4">
      <form
        onSubmit={handleLogin}
        className="flex flex-col w-full sm:w-[380px] md:w-[420px] lg:w-[450px] p-6 sm:p-8 border rounded-xl shadow-md bg-white gap-4"
      >
        <h5 className="text-lg sm:text-xl md:text-2xl font-semibold text-center mb-4 sm:mb-6">
          Welcome Back!
        </h5>

        {error && <Alert severity="error">{error}</Alert>}

        <TextField
          required
          label="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          fullWidth
        />

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
                to="/terms&Conditions"
                className="text-blue-600 hover:underline"
              >
                Terms & Conditions
              </Link>
            </span>
          }
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          disabled={isSubmitDisabled}
          className={`h-10 normal-case text-sm sm:text-base ${
            isSubmitDisabled ? "bg-gray-400 hover:bg-gray-400" : "bg-blue-600"
          }`}
        >
          {loading ? "Sending OTP..." : "Send OTP"}
        </Button>

        <p className="text-sm text-center mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>

        <p className="text-xs text-center text-gray-500 mt-6">
          © 2025 by Prashant Patwa
        </p>
      </form>
    </div>
  );
}
