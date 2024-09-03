import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './AboutSection.css';


const AboutSection = () => {
  return (

    <div className="aboutContainer">
      <h1>About Us</h1>
      <hr />
      <div className='aboutSection'>
            <h2>Who We Are</h2>
            <p>Welcome to VolunteerHub, a non-profit organization dedicated to making a difference in the lives of underserved communities around the world. Our mission is to empower individuals, promote sustainable development, and foster a spirit of community and collaboration.</p>
      </div>
      <div className = "aboutSection">
        <h2>Our Mission</h2>
        <p>At VolunteerHub, we believe in creating lasting change by addressing the root causes of poverty and inequality. Our mission is to Empower Communities Through education, training, and support, we help individuals and communities build sustainable futures.Advocate for Equality , We work to ensure that all individuals, regardless of gender, race, or socioeconomic status, have access to opportunities and resources.</p>
      </div>
      <div className = "aboutSection">
        <h2>Join Us</h2>
        <p>We believe that together, we can make a difference. Whether you’re an individual looking to volunteer, a corporation interested in partnership opportunities, or simply someone who wants to learn more about our work, we invite you to join us on this journey towards a more equitable and sustainable world.</p>
      </div>
      <div className = "lower">
        <p>Thank you for being part of our story. Together, we can build a brighter future.</p>
      </div>
    </div>
  );
};

export default AboutSection;
