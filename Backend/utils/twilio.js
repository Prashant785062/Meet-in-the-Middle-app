import dotenv from "dotenv";
dotenv.config();    // --> JAHA BHI process.env vaha ye lines likhni hai

import Twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromNumber = process.env.TWILIO_PHONE_NUMBER;


const client = new Twilio(accountSid, authToken);

export const sendMeetingInvite = async (to, meetingTitle, acceptLink, declineLink) => {
  const messageBody = `You are invited to meeting: ${meetingTitle}.\nAccept: ${acceptLink}\nDecline: ${declineLink}`;
  try {
    console.log("Twilio send test:", { to, from: fromNumber, body: messageBody });
    await client.messages.create({
      body: messageBody,
      from: fromNumber, 
      to: to,           
    });
    console.log(`📩 Invitation sent to ${to}`);
  } catch (error) {
    console.error("❌ Invitation sending failed:", error.message);
    throw new Error(error.message); 
  }
};

export default client;
