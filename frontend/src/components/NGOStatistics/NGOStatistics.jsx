import React from 'react';
import './NGOStatistics.css';

const NGOStatistics = () => {
  return (
    <div className="ngo-statistics">
      <h3>Statistics</h3>
      <div className="stats-grid">
        <div className="stat-card">
          <h4>Total Events</h4>
          <p>12</p>
        </div>
        <div className="stat-card">
          <h4>Total Volunteers</h4>
          <p>150</p>
        </div>
        <div className="stat-card">
          <h4>Donations Received</h4>
          <p>$10,000</p>
        </div>
        <div className="stat-card">
          <h4>Upcoming Events</h4>
          <p>4</p>
        </div>
      </div>
    </div>
  );
};

export default NGOStatistics;
