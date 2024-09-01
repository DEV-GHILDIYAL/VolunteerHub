import React from 'react';
import Card from '../Card/Card';
import './CardSection.css';

const CardSection = () => {
  const cards = [
    {
      image: '../../assets/images/images.png',
      title: 'Event 1',
      description: 'Brief description of Event 1.',
    },
    {
        image: '../../assets/images.png',
      title: 'Event 2',
      description: 'Brief description of Event 2.',
    },
    {
      image: '../../assets/images.png',
      title: 'Event 3',
      description: 'Brief description of Event 3.',
    },
    // Add more card objects as needed
  ];

  return (
    <div className="card-section">
      {cards.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default CardSection;
