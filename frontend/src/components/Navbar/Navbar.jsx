import React,{useState,useEffect,useContext} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
// import { UserContext } from '../../helpers/userContext';

// backend
const Navbar = () => {
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
        {/* { */}
          {/* // Object.keys(user).length > 0?( */}
            {/* <> */}
              {/* <li></li> */}
              {/* <li><Link to="/profile" className='profile-navbar'>name</Link></li> */}
            {/* </> */}
          {/* ): */}
          {/* <li><Link to="/login" className="login-navbar-button">Login</Link></li> */}
        {/* } */}
      </ul>

      {/* FOR TESTING */}
      <div className="navbar-account">
      <Link to="/admin">Admin</Link>
          <Link to="/profile" className='profile-navbar'>Profile</Link>
          <Link to="/login" className="login-navbar-button">Login</Link>
      </div>
      <Link to="/logout">Logout</Link>
    </nav>
  );
};

export default Navbar;
