import React, { useContext, useEffect, useState } from 'react';
import './Profile.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import logoutHandle from '../../helpers/logoutHandle'
// import { UserContext } from '../../helpers/userContext';

const Profile = () => {
  const [activeSection, setActiveSection] = useState('account');
  // const { user } = useContext(UserContext)

  const user = {
    name: 'd',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    address: '123 Main St, Anytown, USA',
    profilePicture: 'https://w7.pngwing.com/pngs/973/860/png-transparent-anonym-avatar-default-head-person-unknown-user-user-pictures-icon-thumbnail.png',
  };

  const events = {
    upcoming: [
      { id: 1, title: 'Beach Cleanup', date: '2024-09-15' },
      { id: 2, title: 'Tree Planting', date: '2024-09-22' },
    ],
    past: [
      { id: 3, title: 'Food Distribution', date: '2024-08-10' },
    ],
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };


  const renderContent = () => {
    switch (activeSection) {
      case 'account':
        return (
          <div className="content-section">
            <h3>Account Information</h3>
            <div className="content-item">
              <label>Full Name</label>
              <p>{user.name}</p>
            </div>
            <hr/>
            <div className="content-item">
              <label>Email</label>
              <p>{user.email}</p>
            </div>
            <hr/>
            <div className="content-item">
              <label>Phone</label>
              <p>{user.phone}</p>
            </div>
            <hr/>
            <div className="content-item">
              <label>Address</label>
              <p>{user.address}</p>
            </div>
            <hr/>
            <button>Edit</button>
          </div>
        );
      case 'badges':
        return (
          <div className="content-section">
            <h3>Badges & Achievements</h3>
            <div className="badge-list">
              <p>Badge 1: Completed 5 Events</p>
              <p>Badge 2: Top Volunteer</p>
            </div>
          </div>
        );
      case 'donations':
        return (
          <div className="content-section">
            <h3>Donation History</h3>
            <div className="donation-list">
              <p>Donation 1: $50 to Tree Planting</p>
              <p>Donation 2: $100 to Beach Cleanup</p>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="content-section">
            <h3>Settings</h3>
            <div className="settings-list">
              <p>Notification Preferences</p>
              <p>Privacy Settings</p>
              <p>Account Security</p>
            </div>
          </div>
        );
      case 'support':
        return (
          <div className="content-section">
            <h3>Support</h3>
            <div className="support-list">
              <p>Help Center: FAQs, Guides</p>
              <p>Contact Support: Form or Email</p>
            </div>
          </div>
        );
      case 'events':
        return (
          <div className="content-section">
            <h3>My Events</h3>
            <div className="event-list">
              <h4>Upcoming Events</h4>
              <ul>
                {events.upcoming.map(event => (
                  <li key={event.id}>{event.title} - {event.date}</li>
                ))}
              </ul>
              <h4>Past Events</h4>
              <ul>
                {events.past.map(event => (
                  <li key={event.id}>{event.title} - {event.date}</li>
                ))}
              </ul>
            </div>
          </div>
        );
      default:
        return <div className="content-section">Select a section</div>;
    }
  };

  return (
    <>
    <Navbar/>
    <div className="profile-container">
      <div className="profile-sidebar">
        <div className="profile-header">
          <img className="profile-picture" src={user.profilePicture} alt="Profile" />
          <h2>{user.name}</h2>
        </div>
        <ul>
          <li
            className={activeSection === 'account' ? 'active' : ''}
            onClick={() => handleSectionChange('account')}
          >
            Account
          </li>
          <li
            className={activeSection === 'badges' ? 'active' : ''}
            onClick={() => handleSectionChange('badges')}
          >
            Badges & Achievements
          </li>
          <li
            className={activeSection === 'donations' ? 'active' : ''}
            onClick={() => handleSectionChange('donations')}
          >
            Donation History
          </li>
          <li
            className={activeSection === 'settings' ? 'active' : ''}
            onClick={() => handleSectionChange('settings')}
          >
            Settings
          </li>
          <li
            className={activeSection === 'support' ? 'active' : ''}
            onClick={() => handleSectionChange('support')}
          >
            Support
          </li>
          <li
            className={activeSection === 'events' ? 'active' : ''}
            onClick={() => handleSectionChange('events')}
          >
            My Events
          </li>
        </ul>
        <button className="logout-button" onClick={logoutHandle()}>Logout</button>
      </div>
      <div className="profile-details">
        {renderContent()}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Profile;
