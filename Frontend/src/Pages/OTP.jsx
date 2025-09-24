import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function OTPPage() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);

  const handleVerify = () => {
    if (!phone || !otp) return;
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setVerified(true);

      setTimeout(() => {
        window.location.href = "./"; 
      }, 1000);
    }, 1500);
  };

  const handleResend = () => {
    if (!phone) return;
    setResendLoading(true);
    setTimeout(() => {
      setResendLoading(false);
      alert("OTP resent successfully!");
    }, 1500);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-50">
      <h1 className="text-xl font-semibold mb-6 text-center">
        Verify your OTP to continue
      </h1>

      <div className="flex flex-col gap-4 justify-center items-center border p-6 rounded-lg max-w-[400px] bg-white shadow-md">
        {/* Phone Number Input */}
        <TextField
          id="outlined-phone"
          label="Phone Number"
          variant="outlined"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full"
        />

        {/* OTP Input */}
        <TextField
          id="outlined-otp"
          label="Verification Code"
          variant="outlined"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full"
        />

        <div className="flex gap-4 relative mt-2">
          <Button
            onClick={handleVerify}
            disabled={loading || verified || !phone || !otp}
            className={`h-10 flex items-center justify-center gap-2 ${
              loading || verified ? "bg-gray-400 hover:bg-gray-400" : ""
            }`}
            variant="contained"
          >
            {loading && <CircularProgress size={20} className="text-white" />}
            {verified ? <CheckCircleIcon className="text-green-500" /> : "Verify"}
          </Button>

          <Button
            onClick={handleResend}
            disabled={resendLoading || !phone}
            className={`h-10 ${
              resendLoading ? "bg-gray-400 hover:bg-gray-400" : ""
            }`}
            variant="contained"
          >
            {resendLoading ? "Resending..." : "Resend"}
          </Button>
        </div>
      </div>
    </div>
  );
}
