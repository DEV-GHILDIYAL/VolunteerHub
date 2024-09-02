import React from "react";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import LoginRegister from "./pages/LoginRegister/LoginRegister";
import NGORegister from "./pages/NGORegister/NGORegister";
import Donate from "./pages/Donation/Donate";
import Profile from "./pages/profile/Profile";
import UpComingEvent from "./pages/UpcomingEvents/UpComingEvents";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/donate" element={<Donate/>} />
        <Route path="/ngos/apply" element={<NGORegister />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/events/upcoming" element={<UpComingEvent/>}/>
      </Routes>
    </div>
  );
};

export default App;
