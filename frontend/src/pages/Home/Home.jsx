import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import CardSection from '../../components/CardSection/CardSection';
import './Home.css'; // Add a CSS file for Home-specific styles
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="home-content">
        <h2 className="upcoming-events-title">UPCOMING EVENTS</h2>
        <CardSection />
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
