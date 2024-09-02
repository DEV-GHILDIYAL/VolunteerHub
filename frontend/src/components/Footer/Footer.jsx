import React from 'react'
import './Footer.css'
<<<<<<< HEAD
import {logo,facebook_icon,twitter_icon,linkedin_icon} from '../../assets/assets'
=======
import { logo, facebook_icon, twitter_icon, linkedin_icon } from '../../assets/images/assets'
>>>>>>> bf1e88a7a96951b84e76f52506b3d06ceb67b8a6

export const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={logo}/>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, temporibus. Officiis facere ipsa, laudantium reiciendis, officia nesciunt rem, quis numquam ipsam sint eligendi possimus molestias sed harum aperiam odio id! Sapiente debitis adipisci ullam?</p>
                <div className="footer-social-icons">
                    <img src={facebook_icon} />
                    <img src={twitter_icon} />
                    <img src={linkedin_icon} />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Suppoters</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-212-456-7890</li>
                    <li>contact@volunteerhub.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 VolunteerHub.com - All Right Reserved</p>
    </div>
  )
}

export default Footer;