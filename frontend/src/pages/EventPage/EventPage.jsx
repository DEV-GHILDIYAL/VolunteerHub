import React from "react";
import "./EventPage.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const EventPage = () => {
  const event = {
    name: "Beach Cleanup Drive",
    description: "Join us for a beach cleanup drive to keep our shores clean and safe.",
    bannerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwMGHAqmRp3RjKm037MQwhPN-jv2mZItereQ&s", // Replace with your image URL
    location: "Mumbai Maharashtra India",
    time: "10:00 AM - 2:00 PM",
    area: "Environment",
    importance: "High",
    ngoName: "Clean Shores Initiative",
    ngoDetails: "Clean Shores Initiative is a non-profit organization dedicated to keeping our beaches clean and promoting environmental awareness."
  };

  return (
    <>
      <Navbar />
      <div className="event-container">
        <div className="event-banner">
          <img src={event.bannerImage} alt={event.name} />
        </div>
        <div className="event-details">
          <h1>{event.name}</h1>
          <p className="event-description">{event.description}</p>
          <div className="event-info">
            <p><strong>Location:</strong> {event.location}</p>
            <p><strong>Time:</strong> {event.time}</p>
            <p><strong>Area:</strong> {event.area}</p>
            <p><strong>Importance:</strong> {event.importance}</p>
          </div>
          <div className="ngo-details">
            <h2>About the NGO</h2>
            <p><strong>NGO Name:</strong> {event.ngoName}</p>
            <p>{event.ngoDetails}</p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default EventPage;
