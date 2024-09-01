import React from "react";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import LoginRegister from "./pages/LoginRegister/LoginRegister";
import NGORegister from "./pages/NGORegister/NGORegister";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/ngos/apply" element={<NGORegister />} />
      </Routes>
    </div>
  );
};

export default App;
