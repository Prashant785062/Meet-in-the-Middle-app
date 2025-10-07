import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api';
const MEETINGS_URL = `${BASE_URL}/meetings`;
const INVITATIONS_URL = `${BASE_URL}/invitations`;


export const createMeeting = async (meetingData) => {
  try {
    const token = localStorage.getItem('token'); 
    const response = await axios.post(
      `${MEETINGS_URL}/create`,
      { ...meetingData, organizer: meetingData.createdBy }, // add organizer id
      { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` } } 
    );
    return response.data;
  } catch (error) {
    // new Error(...) creates a JavaScript Error object with a custom message.
    throw new Error(error.response?.data?.message || 'Failed to create meeting');
  }
};


export const getUserInvitations = async (userId) => {
  if (!userId) throw new Error("User ID is required");

  try {
    const token = localStorage.getItem("token"); 
    const response = await axios.get(`${INVITATIONS_URL}/user/${userId}`, {
      headers: { 'Authorization': `Bearer ${token}` } 
    });
    return { success: true, invitations: response.data.invitations || [] };
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch invitations');
  }
};


export const respondInvitation = async (invitationId, response) => {
  try {
    const token = localStorage.getItem('token'); 
    const result = await axios.patch(
      `${INVITATIONS_URL}/${invitationId}/${response}`,
      {}, // update status
      { headers: { 'Authorization': `Bearer ${token}` } } 
    );
    return result.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to respond to invitation');
  }
};
