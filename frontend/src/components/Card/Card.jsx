import React from 'react';
import img from '../../assets/images/images.png'
import './Card.css';

const Card = ({ image,title, description }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className='card-image'/>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
