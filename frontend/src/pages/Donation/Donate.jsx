import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Donate.css';
import { toast,Slide } from 'react-toastify';

const Donate = () => {
  const [amount, setAmount] = useState(0)
  const [total, setTotal] = useState(0)
  const handleChange = (e)=>{
    setAmount(e.target.value);
    
  }
  const handleClick = (e)=>{
    e.preventDefault();
    if(!amount || amount==null){
      toast.error('gareeb hai kya?', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
        transition: Slide,
        });
    }
    else if(Number(amount)>100001){
      toast('Goli beta masti nahi', {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "light",
          transition: Slide,
          });
    }else{
      const num = Number(total)+ Number(amount);
      setTotal(num)
      setAmount('')
      document.getElementById('donation').value="";

    }
  }

  return (
    <>
      <Navbar />
      <div className = "body">
        <div className="top-content">
          <h1>For A Greater Cause</h1>
          <p>
            Amidst the backdrop of socioeconomic disparities, NGOs stand as a beacon of hope, directing resources and aid to those in need. By contributing to NGOs, individuals participate in holistic community development, facilitating access to education, healthcare, and essential resources. Furthermore, NGOs often possess the expertise and grassroots connections necessary for implementing sustainable solutions, thereby ensuring enduring change within communities.
          </p>
          <br />
          <i>“When we give cheerfully and accept gratefully, everyone is blessed.”</i>
        </div>

        <div className="donation-container">
          <h1>Make A Donation</h1>
          <p>I wish to make a donation of:</p>

          <form action="#" method="post"> 
            <input type="text" id="donation" name="donation" min="1" placeholder="Enter amount" required onChange={handleChange} />
            
            <button type="submit" onClick={handleClick}>Donate Now</button>
          </form>
        </div>

        <div className="top-content">
          <h2>Raised So Far <input type="text" value={total} readOnly /></h2>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Donate;
