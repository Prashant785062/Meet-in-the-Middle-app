import { useState } from "react";
import { Button, Alert } from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

export default function Plans() {
  const [billing, setBilling] = useState("monthly");

  const plans = [
    {
      name: "Free",
      monthly: "$0",
      yearly: "$0",
      features: [
        "Create and manage meetings",
        "Send up to 5 invitations per month",
        "Access suggested meeting points",
        "No real-time collaboration",
        "No advanced support",
      ],
      highlight: false,
    },
    {
      name: "Standard",
      monthly: "$9.99",
      yearly: "$99.99 (Save 15%)",
      features: [
        "Unlimited meetings & invitations",
        "Real-time location suggestions",
        "Notes & basic productivity tools",
        "Priority email support",
        "No dedicated account manager",
      ],
      highlight: true,
    },
    {
      name: "Business",
      monthly: "$24.99",
      yearly: "$249.99 (Save 20%)",
      features: [
        "Everything in Standard",
        "Advanced WebRTC meeting support",
        "Team dashboards & admin controls",
        "Early access to new features",
        "Dedicated support & onboarding",
      ],
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 md:px-12 lg:px-20">
      <Alert severity="info" className="mb-6">
        These subscription plans are <strong>only for learning/demo purposes</strong>. 
        They will be updated when WebRTC and Socket features are integrated.
      </Alert>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-violet-600 mb-4">
        Plans & Pricing
      </h1>
      <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto text-sm sm:text-base md:text-lg">
        From handling simple tasks to managing complex workflows, our plans are thoughtfully designed to
        help you optimize your processes, save valuable time, and grow your projects with ease and efficiency.
      </p>

      <div className="flex justify-center gap-4 mb-10">
        <Button
          variant={billing === "monthly" ? "contained" : "outlined"}
          color="primary"
          onClick={() => setBilling("monthly")}
        >
          Monthly
        </Button>
        <Button
          variant={billing === "yearly" ? "contained" : "outlined"}
          color="primary"
          onClick={() => setBilling("yearly")}
        >
          Yearly
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-xl shadow-lg p-6 text-black bg-white border transition-transform hover:scale-105 ${
              plan.highlight ? "border-violet-500" : "border-gray-300"
            }`}
          >
            <h2 className="text-xl md:text-2xl font-bold text-violet-600 mb-2">
              {plan.name}
            </h2>

            <p className="text-2xl md:text-3xl font-bold mb-4">
              {billing === "monthly" ? plan.monthly : plan.yearly}
            </p>

            <ul className="space-y-2 text-gray-700 mb-3">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckBoxIcon className="text-violet-500" /> {f}
                </li>
              ))}
            </ul>

            <Button
              variant="contained"
              color="secondary"
              className="mt-6 w-full"
            >
              {plan.name === "Free" ? "Get Started" : "Choose Plan"}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
