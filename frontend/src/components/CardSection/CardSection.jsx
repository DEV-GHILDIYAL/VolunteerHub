import React from 'react';
import Card from '../Card/Card';
import img from '../../assets/images/images.png';
import './CardSection.css';

const CardSection = () => {
  const cards = [
    {
      image: img,
      title: 'Event 1',
      description: 'Brief description of Event 1.',
      location: 'Mumbai',
      time: '10:00 AM - 2:00 PM',
      ngoName:"Ocean Conservancy",
    },
    {
      image: img,
      title: 'Event 2',
      description: 'Brief description of Event 2.',
      location: 'Mumbai',
      time: '10:00 AM - 2:00 PM',
      ngoName:"Ocean Conservancy",
    },
    {
      image: img,
      title: 'Event 3',
      description: 'Brief description of Event 3.',
      location: 'Mumbai',
      time: '10:00 AM - 2:00 PM',
      ngoName:"Ocean Conservancy",
    },
    {
      image: img,
      title: 'Event 4',
      description: 'Brief description of Event 4.',
      location: 'Mumbai',
      time: '10:00 AM - 2:00 PM',
      ngoName:"Ocean Conservancy",
    },

    {
      image: img,
      title: 'Event 5',
      description: 'Brief description of Event 5.',
      location: 'Mumbai',
      time: '10:00 AM - 2:00 PM',
      ngoName:"Ocean Conservancy",
    }, 

    {
      image: img,
      title: 'Event 6',
      description: 'Brief description of Event 6.',
      location: 'Mumbai',
      time: '10:00 AM - 2:00 PM',
      ngoName:"Ocean Conservancy",
    },    // Add more card objects as needed
  ];

  return (
    <div className="card-section">
      {cards.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
          location={card.location}
          time={card.time}
          ngoName={card.ngoName}
        />
      ))}
    </div>
  );
};

export default CardSection;
