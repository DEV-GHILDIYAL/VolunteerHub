import React from 'react';
import './Sidebar.css';

const Sidebar = ({ setActiveTab }) => {
  return (
    <div className="sidebar">
      <h2>NGO Dashboard</h2>
      <ul>
        <li onClick={() => setActiveTab('createEvent')}>Create Event</li>
        <li onClick={() => setActiveTab('eventList')}>Manage Events</li>
        <li onClick={() => setActiveTab('volunteerManagement')}>Volunteer Management</li>
        <li onClick={() => setActiveTab('statistics')}>Statistics</li>
      </ul>
    </div>
  );
};

export default Sidebar;
