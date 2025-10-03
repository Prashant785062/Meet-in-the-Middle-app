import { Box, Typography, Button, Alert, Card } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import { useRef } from "react";

export default function TermsConditions() {
  const termsRef = useRef();

  const handleDownload = () => {
    const text = termsRef.current.innerText;
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Terms_and_Conditions.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const termsList = [
    {
      title: "Eligibility and Usage",
      content: [
        "You must be at least 18 years old to create an account, or have verifiable parental/guardian consent if under 18.",
        "By registering, you confirm that all information you provide is accurate, current, and complete.",
        "The App is designed solely for coordinating meetings and finding convenient locations for participants. It must not be used for unlawful purposes or activities that may cause harm to others.",
        "We reserve the right to refuse service, suspend accounts, or terminate access if eligibility requirements are not met."
      ]
    },
    {
      title: "User Responsibilities",
      content: [
        "You are solely responsible for maintaining the confidentiality of your account credentials.",
        "Any activity carried out through your account is considered your responsibility, whether or not authorized by you.",
        "You agree not to:",
        "- Engage in spamming, harassment, or abusive behavior.",
        "- Upload harmful, misleading, or illegal content.",
        "- Interfere with or disrupt the App’s services, servers, or networks.",
        "You acknowledge that your interactions with other users, whether online or in person, are at your own discretion and risk."
      ]
    },
    {
      title: "Meetings & Invitations",
      content: [
        "Users may create, send, and manage meeting invitations through the App.",
        "Invitations are private and accessible only to selected participants. However, you are responsible for ensuring the accuracy of shared details (time, date, and location).",
        "We do not endorse or monitor the actual meetings arranged between users. You are responsible for ensuring your safety and the reliability of participants when attending in-person gatherings.",
        "The App provides tools to suggest suitable meeting locations, but final arrangements rest solely with users."
      ]
    },
    {
      title: "Location & Data",
      content: [
        "Certain features of the App require access to your real-time location in order to suggest meeting points.",
        "By enabling location services, you grant us permission to collect, process, and use this information for service delivery.",
        "We do not sell or disclose your personal location data to third parties without your consent, except as required by law.",
        "Users are advised to exercise discretion when sharing sensitive data within the App."
      ]
    },
    {
      title: "Third-Party Services",
      content: [
        "The App may rely on third-party services such as maps, OTP-based authentication, or SMS gateways.",
        "While we take care in choosing reliable partners, we do not control their performance, security, or privacy practices.",
        "By using the App, you agree that we are not liable for any issues, losses, or damages arising from reliance on third-party services."
      ]
    },
    {
      title: "Limitations of Liability",
      content: [
        "The App is provided “as is” and “as available” without any express or implied warranties.",
        "We do not guarantee uninterrupted service, error-free functionality, or complete accuracy of suggested meeting locations.",
        "To the maximum extent permitted by law, we shall not be liable for:",
        "- Loss of data or business opportunities.",
        "- Direct, indirect, or incidental damages resulting from use of the App.",
        "- Personal disputes, safety issues, or misconduct arising from in-person meetings."
      ]
    },
    {
      title: "Termination",
      content: [
        "We may suspend, limit, or terminate your account if you violate these Terms or engage in misuse of the App.",
        "Upon termination, your right to access the App and its services will cease immediately.",
        "You may request account deletion at any time, though some data may be retained to comply with legal obligations."
      ]
    },
    {
      title: "Changes to Terms",
      content: [
        "We reserve the right to modify or update these Terms at our discretion.",
        "Updated Terms will be posted within the App along with a revised “Last Updated” date.",
        "Your continued use of the App after such changes constitutes acceptance of the updated Terms."
      ]
    },
    {
      title: "Governing Law",
      content: [
        "These Terms shall be governed by and interpreted in accordance with the laws of India.",
        "Any disputes arising from the use of the App shall be resolved in the competent courts of Jurisdiction."
      ]
    },
    {
      title: "Contact Information",
      content: [
        "If you have any questions, concerns, or feedback regarding these Terms & Conditions, please reach out to us at:",
        "example@gmail.com",
        "123 Office Address",
        "~The App is a learning simulation; all information is non-operational and fake."
      ]
    }
  ];

  return (
    <Box className="min-h-screen flex flex-col px-4 py-8 sm:px-6 md:px-12 lg:px-20 bg-white text-black">
      <Card className="w-full rounded-md p-6 mb-6 bg-gray-100 shadow-md">
        <Typography
          variant="h3"
          className="text-center font-extrabold text-2xl sm:text-3xl md:text-4xl"
        >
          Terms & Conditions
        </Typography>
      </Card>

      <Box className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4 mb-6">
        <Typography>Last Updated: 2025/09/15</Typography>
        <Button
          variant="outlined"
          startIcon={<ShareIcon />}
          onClick={handleDownload}
        >
          Download
        </Button>
      </Box>

      <Alert severity="info" sx={{ mb: 6 }}>
        By using this app, you agree to the following terms and conditions.
      </Alert>

      <Typography className="mb-6">
        Welcome to Meet in the Middle App. Please read these carefully before
        using the App. If you do not agree, you must stop using the App
        immediately.
      </Typography>

      <Box
        component="ul"
        ref={termsRef}
        className="list-decimal pl-5 space-y-6 sm:space-y-8"
      >
        {termsList.map((item, index) => (
          <li key={index}>
            <Typography variant="h6" className="font-semibold mb-2">
              {item.title}
            </Typography>
            {item.content.map((para, idx) => (
              <Typography key={idx} className="mb-1">
                {para}
              </Typography>
            ))}
          </li>
        ))}
      </Box>
    </Box>
  );
}
