import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import CardSection from '../../components/CardSection/CardSection';
import './Home.css'; // Add a CSS file for Home-specific styles
import Footer from '../../components/Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UpcomingEvents from '../../components/UpcomingEvents/UpcomingEvents';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <UpcomingEvents/>
      <Footer/>
    </div>
  );
}

export default Home;
