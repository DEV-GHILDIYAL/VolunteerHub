import React, { useState } from 'react';
import './NGORegister.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const NGORegister = () => {
  const [ngoName, setNgoName] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [address, setAddress] = useState('');
  const [website, setWebsite] = useState('');
  const [mission, setMission] = useState('');
  const [regNumber, setRegNumber] = useState('');
  const [ngoType, setNgoType] = useState('');
  const [documents, setDocuments] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here (e.g., validate fields, display success message)
    console.log("NGO Name:", ngoName);
    console.log("Contact Name:", contactName);
    console.log("Contact Email:", contactEmail);
    console.log("Contact Phone:", contactPhone);
    console.log("Address:", address);
    console.log("Website:", website);
    console.log("Mission Statement:", mission);
    console.log("Registration Number:", regNumber);
    console.log("NGO Type:", ngoType);
    console.log("Documents:", documents);
  };

  return (
    <>
    <Navbar/>
    <div className="ngo-register-container">
      <h2>Register Your NGO</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="ngoName">NGO Name:</label>
          <input
            type="text"
            id="ngoName"
            value={ngoName}
            onChange={(e) => setNgoName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactName">Contact Person Name:</label>
          <input
            type="text"
            id="contactName"
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactEmail">Contact Email:</label>
          <input
            type="email"
            id="contactEmail"
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactPhone">Contact Phone Number:</label>
          <input
            type="tel"
            id="contactPhone"
            value={contactPhone}
            onChange={(e) => setContactPhone(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="website">Website:</label>
          <input
            type="url"
            id="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="mission">Mission Statement:</label>
          <textarea
            id="mission"
            value={mission}
            onChange={(e) => setMission(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="regNumber">Registration Number:</label>
          <input
            type="text"
            id="regNumber"
            value={regNumber}
            onChange={(e) => setRegNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="ngoType">Type of NGO:</label>
          <select
            id="ngoType"
            value={ngoType}
            onChange={(e) => setNgoType(e.target.value)}
            required
          >
            <option value="">Select Type</option>
            <option value="charity">Charity</option>
            <option value="educational">Educational</option>
            <option value="environmental">Environmental</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="documents">Upload Documents:</label>
          <input
            type="file"
            id="documents"
            onChange={(e) => setDocuments(e.target.files[0])}
          />
        </div>
        <button type="submit">Register NGO</button>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default NGORegister;
