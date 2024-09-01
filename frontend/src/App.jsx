import React from "react";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import LoginRegister from "./pages/LoginRegister/LoginRegister";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginRegister />} />
        {/* <Route path="/register" element={<Register />} /> */}
        {/* Add more routes here as needed */}
      </Routes>
    </div>
  );
};

export default App;
