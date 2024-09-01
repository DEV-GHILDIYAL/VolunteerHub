import React, { useState } from "react";
import "./LoginRegister.css";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import Footer from "../../components/Footer/Footer";

const LoginRegister = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Add your registration logic here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    axios.get("/auth/google", (req, res) => {
      console.log("it works");
    });
    console.log("Google Sign-In button clicked");
  };

  return (
    <>
      <Navbar />
      <div className="login-register-container">
        <div className="login-register-card">
          <h2>{isRegistering ? "Register" : "Login"}</h2>
          <form onSubmit={isRegistering ? handleRegister : handleLogin}>
            {isRegistering && (
              <div className="input-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            )}
            <div className="input-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {isRegistering && (
              <div className="input-group">
                <label htmlFor="confirm-password">Confirm Password:</label>
                <input
                  type="password"
                  id="confirm-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            )}
            <button type="submit">
              {isRegistering ? "Register" : "Login"}
            </button>
            <button className="google-signin-button" onClick={handleGoogleSignIn}>
              <img
                src="https://developers.google.com/identity/images/btn_google_signin_dark_normal_web.png"
                alt="Sign in with Google"
                className="google-icon"
              />
            </button>
          </form>
          <p className="toggle-link">
            {isRegistering ? (
              <>
                Already have an account?{" "}
                <button onClick={() => setIsRegistering(false)}>Login</button>
              </>
            ) : (
              <>
                Don’t have an account?{" "}
                <button onClick={() => setIsRegistering(true)}>Register</button>
              </>
            )}
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default LoginRegister;
