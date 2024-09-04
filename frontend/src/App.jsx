import React from "react";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import LoginRegister from "./pages/LoginRegister/LoginRegister";
import NGORegister from "./pages/NGORegister/NGORegister";
import Donate from "./pages/Donation/Donate";
import Profile from "./pages/Profile/Profile";
import UpComingEvent from "./pages/UpcomingEvents/UpComingEvents";
import AdminPage from "./pages/Admin/AdminPage";
import Error from './components/Error';
import EventPage from "./pages/eventPage/EventPage";
import About from "./pages/About/About";
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
          <Route path='*' element={<Error />} />
        </Routes>
      {/* </UserProvider> */}
    </div>
  );
};

export default App;
