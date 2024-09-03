import React, { useState, useEffect } from "react";
import "./EventPage.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const EventPage = () => {
  const navigate = useNavigate();

  const event = {
    name: "Beach Cleanup Drive",
    description: "Join us for a beach cleanup drive to keep our shores clean and safe.",
    bannerImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwMGHAqmRp3RjKm037MQwhPN-jv2mZItereQ&s",
    location: "Mumbai, Maharashtra, India",
    time: "10:00 AM - 2:00 PM",
    date: "2024-10-15T10:00:00",
    area: "Environment",
    importance: "High",
    ngoName: "Clean Shores Initiative",
    ngoDetails: "Clean Shores Initiative is a non-profit organization dedicated to keeping our beaches clean and promoting environmental awareness.",
    gallery: [
      "https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/7/2018/05/30140053/30052018_dadarbeachcleanup_01.jpg",
      "https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/7/2018/05/30140053/30052018_dadarbeachcleanup_01.jpg",
      "https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/7/2018/05/30140053/30052018_dadarbeachcleanup_01.jpg",
      "https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/7/2018/05/30140053/30052018_dadarbeachcleanup_01.jpg",
      "https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/7/2018/05/30140053/30052018_dadarbeachcleanup_01.jpg",
    ]
  };

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(event.date) - +new Date();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      setTimeLeft(timeLeft);
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [event.date]);

  const handleRegister = () => {
    navigate('/register');
  };

  const handleInvite = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      alert("Event link copied to clipboard! Share it with your friends.");
    }).catch(err => {
      alert("Failed to copy link. Please try again.");
      console.error("Error copying text: ", err);
    });
  };

  const socialShareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,
    twitter: `https://twitter.com/intent/tweet?url=${window.location.href}&text=${encodeURIComponent(event.name)} - ${encodeURIComponent(event.description)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`,
  };

  return (
    <>
      <Helmet>
        <title>{event.name}</title>
      </Helmet>

      <Navbar />

      <div className="event-container">
        <div className="event-banner">
          <img src={event.bannerImage} alt={event.name} />
        </div>

        <div className="event-details">
          <h1>{event.name}</h1>
          <p className="event-description">{event.description}</p>

          {/* Countdown Timer */}
          <div className="event-countdown">
            <h2>Event Countdown</h2>
            <div className="countdown-timer">
              <span>{timeLeft.days}d</span> : <span>{timeLeft.hours}h</span> : <span>{timeLeft.minutes}m</span> : <span>{timeLeft.seconds}s</span>
            </div>
          </div>

          {/* Event Info */}
          <div className="event-info">
            <p><strong>Location:</strong> {event.location}</p>
            <p><strong>Time:</strong> {event.time}</p>
            <p><strong>Area:</strong> {event.area}</p>
            <p><strong>Importance:</strong> {event.importance}</p>
          </div>

          {/* Event Gallery */}
          <div className="event-gallery">
            <h2>Event Gallery</h2>
            <div className="gallery-images">
              {event.gallery.map((imgSrc, index) => (
                <img key={index} src={imgSrc} alt={`Gallery image ${index + 1}`} loading="lazy" />
              ))}
            </div>
          </div>

          {/* Register Button */}
          <button className="register-button" onClick={handleRegister}>
            Register for Event
          </button>

          {/* Invite Button */}
          <button className="invite-button" onClick={handleInvite}>
            Invite Friends
          </button>

          {/* Map Integration */}
          <div className="event-map">
            <h2>Event Location</h2>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15085.544377391492!2d72.84708679864306!3d19.0467549144261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8d72abf2d35%3A0x5ba0b162df2aa82e!2sDharavi%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1725345868106!5m2!1sen!2sin"
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade" 
              title="Event Location"
            ></iframe>
          </div>

          {/* Testimonials */}
          <div className="event-testimonials">
            <h2>What Participants Say</h2>
            <blockquote>
              "Participating in the beach cleanup drive was an eye-opening experience. It's great to contribute to such a cause!"
            </blockquote>
            <blockquote>
              "The event was well-organized and made a significant impact. I’ll definitely join again."
            </blockquote>
          </div>

          {/* NGO Details */}
          <div className="ngo-details">
            <h2>About the NGO</h2>
            <p><strong>NGO Name:</strong> {event.ngoName}</p>
            <p>{event.ngoDetails}</p>
          </div>

          {/* FAQ Section */}
          <div className="event-faq">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-item">
              <h3>What should I bring?</h3>
              <p>Bring water, sunscreen, and gloves. Wear comfortable clothing and shoes.</p>
            </div>
            <div className="faq-item">
              <h3>Do I need to register in advance?</h3>
              <p>Yes, please register in advance to help us plan accordingly.</p>
            </div>
          </div>
        </div>

        {/* Social Sharing */}
        <div className="event-social">
          <h2>Share This Event</h2>
          <div className="social-buttons">
            <a href={socialShareLinks.facebook} target="_blank" rel="noopener noreferrer" className="social-btn facebook">Facebook</a>
            <a href={socialShareLinks.twitter} target="_blank" rel="noopener noreferrer" className="social-btn twitter">Twitter</a>
            <a href={socialShareLinks.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn linkedin">LinkedIn</a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default EventPage;
