import React from "react";
import Home from "./pages/HomePage/Home";
import { Routes, Route } from "react-router-dom";
import LoginRegister from "./pages/LoginRegisterPage/LoginRegister";
import NGORegister from "./pages/NGORegisterPage/NGORegister";
import Donate from "./pages/DonationPage/Donate";
import UpComingEvent from "./pages/UpcomingEventsPage/UpComingEvents";
import AdminPage from "./pages/AdminPage/AdminPage";
import EventPage from "./pages/eventPage/EventPage";
import About from "./pages/AboutPage/About";
import Profile from "./pages/ProfilePage/Profile";
import NGODashboard from "./pages/NGOPage/NGODashboard";
// import { UserProvider } from "./helpers/userContext";

const App = () => {
  return (
    <div className="App">
      {/* <UserProvider> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginRegister />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/ngos/apply" element={<NGORegister />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/events/upcoming" element={<UpComingEvent />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/event" element={<EventPage />} />
          <Route path="/about" element={<About />} />

        </Routes>
      {/* </UserProvider> */}
    </div>
  );
};

export default App;
