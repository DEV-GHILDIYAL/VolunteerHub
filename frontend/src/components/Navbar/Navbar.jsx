// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">NGO Platform</Link>
      </div>
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

        {/* Account Dropdown */}
        <li className="dropdown">
          <Link to="/" className="dropdown-toggle">Account</Link>
          <div className="dropdown-content">
            <Link to="/login">Login/Sign Up</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/logout">Logout</Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
