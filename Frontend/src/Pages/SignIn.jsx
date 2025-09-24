import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import QuickLinks from "../Components/QuickLinks.jsx";
import { useState } from "react";

export default function LoginPage() {
    const [accepted, setAccepted] = useState(true); // not needed for login, can ignore

    const handleSubmit = (e) => {
        e.preventDefault();
        // handle login API call here
        console.log("Login submitted");
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-50">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col w-[400px] p-8 border rounded-xl shadow-md bg-white gap-4"
            >
                <h5 className="text-xl font-semibold text-center mb-6">
                    Welcome Back!
                </h5>

                <TextField required id="outlined-username" label="Username" />
                <TextField
                    required
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />
                <Link to="/otp">

                    <Button type="submit" fullWidth variant="contained">
                        Submit
                    </Button>
                </Link>
                {/* Divider line */}
                <hr className="my-6 border-gray-300" />

                <p className="text-sm text-center">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-blue-600 hover:underline">
                        <QuickLinks Name="Sign up" />
                    </Link>
                </p>

                <p className="text-sm text-center mt-2">
                    <Link to="/terms" className="text-blue-600 hover:underline">
                        <QuickLinks Name="Terms & Conditions" />
                    </Link>
                </p>

                <p className="text-xs text-center text-gray-500 mt-4">
                    © 2025 by Prashant Patwa
                </p>
            </form>
        </div>
    );
}
