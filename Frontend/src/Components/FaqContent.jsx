import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FaqContent() {

    const faqs = [
  {
    question: "What is Meet in the Middle?",
    answer: `Meet in the Middle is a smart meeting planner that helps groups of people
    decide on the most convenient place to meet. Instead of wasting time choosing
    a location, the app calculates the midpoint between attendees and suggests fair
    options. It saves effort, reduces confusion, and ensures everyone travels roughly
    the same distance. It’s especially helpful for group projects, friends meetups, or
    team gatherings.`
  },
  {
    question: "How do I sign up?",
    answer: `Signing up is quick and simple. All you need to do is enter your phone
    number on the signup page, and we will send you a one-time password (OTP) for
    verification. Once verified, your account is created instantly without requiring
    any lengthy forms. You can then start creating meetings and inviting friends
    right away.`
  },
  {
    question: "How does OTP login work?",
    answer: `Instead of remembering passwords, you log in using your phone number.
    Simply enter your number, and an OTP will be sent to your phone for verification.
    Once you type in the correct OTP, you’re securely logged in. This method
    increases security because the login is always verified with your device.
    It also makes the app easier to use without forgetting passwords.`
  },
  {
    question: "Can I invite friends to a meeting?",
    answer: `Yes, inviting friends is one of the core features of Meet in the Middle.
    Once you create a meeting, you can share an invite link or directly add their
    phone numbers. Your friends will then receive an invitation and can join the
    meeting. Everyone’s location is considered when suggesting meeting points,
    making it fair and convenient for the entire group.`
  },
  {
    question: "How is the meeting location decided?",
    answer: `The app uses the geolocation of all attendees to calculate a central
    midpoint. Once the midpoint is found, nearby cafes, restaurants, or meeting
    spots are suggested using map services. This ensures that no one travels
    excessively compared to others. The result is a balanced, fair, and practical
    location that suits the whole group.`
  },
  {
    question: "Is my data safe?",
    answer: `Yes, we take privacy very seriously. Your phone number is used only for
    OTP verification and secure login. Location data is processed only to calculate
    meeting points and is not shared with anyone outside the app. We do not sell,
    misuse, or expose your personal data. Security measures like encryption and
    token-based authentication protect your account.`
  },
  {
    question: "Is this app free to use?",
    answer: `Yes, Meet in the Middle is completely free to use. Since this is a
    student project built for learning purposes, we don’t charge any subscription
    fees. You can create unlimited meetings, invite as many friends as you want,
    and use all available features without restrictions. In the future, we may
    expand features, but core functionality will remain free.`
  }
];

  return (
    <div style={{ maxWidth: 700, margin: "2rem auto" }}>
      <Typography variant="h4" gutterBottom align="center">
        Frequently Asked Questions
      </Typography>

      {faqs.map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`faq-content-${index}`}
            id={`faq-header-${index}`}
          >
            <Typography variant="subtitle1" fontWeight="bold">
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" color="textSecondary">
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
