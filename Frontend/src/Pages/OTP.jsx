import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { verifyOTP, loginUser } from "../api/auth";

export default function OTP() {
  const location = useLocation();
  const navigate = useNavigate();
  const phone = location.state?.phone || "";

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState("");

  const handleVerify = async () => {
    setError("");
    if (!otp) {
      setError("OTP is required");
      return;
    }
    setLoading(true);
    try {
      const res = await verifyOTP({ phone, otp });
      const data = res?.data || res;
      if (data?.token) localStorage.setItem("token", data.token);
      if (data?.user) {
        localStorage.setItem("user", JSON.stringify(data.user));
        const id = data.user._id || data.user.id || data.user.userId;
        if (id) localStorage.setItem("userId", id);
      } else if (data?.userId || data?._id || data?.id) {
        localStorage.setItem("userId", data.userId || data._id || data.id);
      }
      setVerified(true);
      navigate("/home");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setError("");
    setResendLoading(true);
    try {
      await loginUser({ phone });
      alert("OTP resent successfully");
    } catch (err) {
      setError(err.response?.data?.message || "Error resending OTP");
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50 px-4">
      <div className="flex flex-col gap-4 justify-center items-center border p-6 sm:p-8 rounded-lg w-full max-w-sm sm:max-w-md md:max-w-lg bg-white shadow-md">
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6 text-center">
          Verify your OTP
        </h1>

        {error && <Alert severity="error" className="w-full">{error}</Alert>}

        <TextField label="Phone" value={phone} fullWidth InputProps={{ readOnly: true }} />
        <TextField label="OTP" value={otp} onChange={(e) => setOtp(e.target.value)} fullWidth />

        <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full">
          <Button
            onClick={handleVerify}
            disabled={loading || verified || !otp}
            variant="contained"
            fullWidth
            className={`h-10 ${loading || verified || !otp ? "bg-gray-400" : "bg-blue-600"}`}
          >
            {loading && <CircularProgress size={20} className="text-white" />}
            {verified ? <CheckCircleIcon className="text-green-500" /> : "Verify"}
          </Button>

          <Button
            onClick={handleResend}
            disabled={resendLoading || !phone}
            variant="contained"
            fullWidth
            className={`h-10 ${resendLoading || !phone ? "bg-gray-400" : "bg-blue-500"}`}
          >
            {resendLoading ? "Resending..." : "Resend"}
          </Button>
        </div>
      </div>
    </div>
  );
}
