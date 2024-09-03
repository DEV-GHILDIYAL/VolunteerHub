import React, { useContext, useEffect, useState } from 'react';
import './Profile.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import logoutHandle from '../../helpers/logoutHandle'
// import { UserContext } from '../../helpers/userContext';

const Profile = () => {
  const [users, setUsers] = useState({})
  const [activeSection, setActiveSection] = useState('account');

  // const {user} = useContext(UserContext);


  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch('http://localhost:5050/login/success', { credentials: 'include' });
        const data = await response.json();
        setUsers(data.user);
        console.log('data from navbar',user)
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, [setUsers]);
  // const { user } = useContext(UserContext)

  const user = {
    displayName: users.displayName,
    firstName:users.firstName,
    lastName:users.lastName,
    loginType:users.loginType,
    // email: 'john.doe@example.com',
    // phone: '123-456-7890',
    // address: '123 Main St, Anytown, USA',
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
              <p>{user.displayName}</p>
            </div>
            <hr/>
            <div className="content-item">
              <label>Firstname</label>
              <p>{user.firstName}</p>
            </div>
            <hr/>
            <div className="content-item">
              <label>lastName</label>
              <p>{user.lastName}</p>
            </div>
            <hr/>
            <div className="content-item">
              <label>Address</label>
              {/* <p>{user.address}</p> */}
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
              <hr/>
              <p>Badge 2: Top Volunteer</p>
              <hr/>
            </div>
          </div>
        );
      case 'donations':
        return (
          <div className="content-section">
            <h3>Donation History</h3>
            <div className="donation-list">
              <p>Donation 1: $50 to Tree Planting</p>
              <hr/>
              <p>Donation 2: $100 to Beach Cleanup</p>
              <hr/>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="content-section">
            <h3>Settings</h3>
            <div className="settings-list">
              <p>Notification Preferences</p>
              <hr/>
              <p>Privacy Settings</p>
              <hr/>
              <p>Account Security</p>
              <hr/>
            </div>
          </div>
        );
      case 'support':
        return (
          <div className="content-section">
            <h3>Support</h3>
            <div className="support-list">
              <p>Help Center: FAQs, Guides</p>
              <hr/>
              <p>Contact Support: Form or Email</p>
              <hr/>
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
              <hr/>
              <h4>Past Events</h4>
              <ul>
                {events.past.map(event => (
                  <li key={event.id}>{event.title} - {event.date}</li>
                ))}
              </ul>
              <hr/>
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
          <img className="profile-picture" src={users.image} alt="Profile" />
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
