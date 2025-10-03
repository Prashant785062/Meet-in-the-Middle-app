import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import OTP from './Pages/OTP';
import Layout from './Pages/Layout';
import Subscription from './Pages/Subscription';
import About from './Pages/About';
import Contact from './Pages/Contact';
import FAQ from './Pages/FAQ';
import Feedback from './Pages/Feedback';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import TermsConditions from './Pages/Terms&Conditions';
import CreateMeeting from './Pages/CreateMeeting';
import Dashboard from './Pages/Dashboard';
import InvitationsList from './Components/InvitationList';
import AuthLayout from './Pages/AuthLayout';
import ProtectedRoute from './Components/ProtectedRoute';
import InviteAttendees from './Components/InviteAttendees';
import Notes from './Pages/Notes';
import MeetingLocation from './Pages/MeetingLocation';
import Logout from './Components/Logout';
import Settings from "./Pages/Settings"
import Profile from './Pages/ProfileCard';

function InviteAttendeesWrapper() {
  const { meetingId } = useParams();
  return <InviteAttendees meetingId={meetingId} />;
}

function App() {
  return (

<Router>
      <Routes>
        {/* Public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/terms&Conditions" element={<TermsConditions />} />

        </Route>


        <Route
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="/home" element={<Home />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/aboutUs" element={<About />} />
          <Route path="/createmeeting" element={<CreateMeeting />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/invitationlist" element={<InvitationsList />} />
          <Route path="/invite-attendees/:meetingId" element={<InviteAttendeesWrapper />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/meetingLocation" element={<MeetingLocation />} />
          <Route path="/terms&Conditions2" element={<TermsConditions />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        

      </Routes>
    </Router>

  );
}

export default App;
