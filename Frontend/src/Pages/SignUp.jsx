import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Alert from "@mui/material/Alert";
import { registerUser } from "../api/auth";

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!username || !password || !phone || !accepted) {
      setError("Please fill all fields and accept terms.");
      return;
    }

    setLoading(true);

    try {
      const response = await registerUser({ username, password, phone });
      setLoading(false);
      navigate("/otp", { state: { phone } });
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.message || "Registration failed. Try again.");
    }
  };

  const isSubmitDisabled =
    !username || !password || !phone || !accepted || loading;

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full sm:w-[400px] md:w-[420px] lg:w-[450px] p-6 sm:p-8 border rounded-xl shadow-md bg-white gap-4"
      >
        <h5 className="text-lg sm:text-xl md:text-2xl font-semibold text-center mb-4 sm:mb-6">
          Create Your Account
        </h5>

        {error && <Alert severity="error">{error}</Alert>}

        <TextField
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
        />

        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
        />

        <TextField
          label="Phone Number"
          type="tel"
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
          {loading ? "Submitting..." : "Submit"}
        </Button>

        <hr className="my-4 sm:my-6 border-gray-300" />

        <p className="text-sm text-center">
          Already have an account?{" "}
          <Link to="/" className="text-blue-600 hover:underline">
            Sign in
          </Link>
        </p>

        <p className="text-xs text-center text-gray-500 mt-4">
          © 2025 by Prashant Patwa
        </p>
      </form>
    </div>
  );
}
