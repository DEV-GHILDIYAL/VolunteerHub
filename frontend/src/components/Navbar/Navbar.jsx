import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

// backend
const Navbar = ({user}) => {
  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <Link to="/">NGO Platform</Link>
      </div>

      {/* Navigation Links Section */}
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>

        {/* Events Dropdown */}
        <li className="dropdown">
          <Link to="/events" className="dropdown-toggle">Events</Link>
          <div className="dropdown-content">
            <Link to="/events/upcoming">Upcoming Events</Link>
            <Link to="/events/past">Past Events</Link>
            <Link to="/events/my-events">My Events</Link>
          </div>
        </li>

        {/* NGOs Dropdown */}
        <li className="dropdown">
          <Link to="/ngos" className="dropdown-toggle">NGOs</Link>
          <div className="dropdown-content">
            <Link to="/ngos/all">All NGOs</Link>
            <Link to="/ngos/my-ngos">My NGOs</Link>
            <Link to="/ngos/apply">Apply for NGO Badge</Link>
          </div>
        </li>

        {/* Volunteer Dropdown */}
        <li className="dropdown">
          <Link to="/volunteer" className="dropdown-toggle">Volunteer</Link>
          <div className="dropdown-content">
            <Link to="/volunteer/opportunities">Volunteer Opportunities</Link>
            <Link to="/volunteer/register">Register as a Volunteer</Link>
            <Link to="/volunteer/resources">Volunteer Resources</Link>
          </div>
        </li>

        <li><Link to="/donate">Donate</Link></li>

        {/* More Dropdown */}
        <li className="dropdown">
          <Link to="/more" className="dropdown-toggle">More</Link>
          <div className="dropdown-content">
            <Link to="/contact">Contact</Link>
            <Link to="/blog">Blog/News</Link>
            <Link to="/faqs">FAQs</Link>
            <Link to="/testimonials">Testimonials</Link>
            <Link to="/resources">Resources</Link>
          </div>
        </li>

        <li><Link to="/admin">Admin</Link></li>
      </ul>

      

      {/* Checking if user is logged in if yes then display name else show login button */}
      {/* Waiting for backend */}
      {/* <div className="navbar-account">
        {user ? (
          <div className="dropdown">
            <span className="dropdown-toggle">Account ({user.displayName})</span>
            <div className="dropdown-content">
              <Link to="/profile">Profile</Link>
              <a href="http://localhost:5050/logout">Logout</a>
            </div>
          </div>
        ) : (
          <Link to="/login" className="login-button">Login</Link>
        )}
      </div> */}


      {/* FOR TESTING */}
      <div className="navbar-account">
          <div className="dropdown">
            <span className="dropdown-toggle">Account</span>
            <div className="dropdown-content">
              <Link to="/profile">Profile</Link>
              <a href="http://localhost:5050/logout" >Logout</a>
            </div>
          </div>
          <Link to="/login" className="login-button">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
