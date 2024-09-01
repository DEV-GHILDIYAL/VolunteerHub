import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Home />
    </Router>
  );
};

export default App;
