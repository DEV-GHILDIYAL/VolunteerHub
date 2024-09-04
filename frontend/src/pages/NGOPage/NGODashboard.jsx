import React, { useState, useEffect } from 'react';
import './NGODashboard.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import CreateEventForm from '../../components/CreateEventForm/EventDetailsFrom';
import VolunteerManagement from '../../components/VolunteerManagement/VolunteerManagement';
import NGOStatistics from '../../components/NGOStatistics/NGOStatistics';
import EventList from '../../components/EventList/EventList';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const NGODashboard = () => {
  const [activeTab, setActiveTab] = useState('createEvent');

  const renderContent = () => {
    switch (activeTab) {
      case 'createEvent':
        return <CreateEventForm />;
      case 'eventList':
        return <EventList />;
      case 'volunteerManagement':
        return <VolunteerManagement />;
      case 'statistics':
        return <NGOStatistics />;
      default:
        return <CreateEventForm />;
    }
  };

  return (
    <>
    <Navbar/>
    <div className="ngo-dashboard">
      <Sidebar setActiveTab={setActiveTab} />
      <div className="ngo-dashboard-content">
        <div className="main-content">
          {renderContent()}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default NGODashboard;
