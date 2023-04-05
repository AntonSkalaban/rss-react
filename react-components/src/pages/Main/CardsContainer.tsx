import React from 'react';
import { data } from '../../data';
import { Card } from './Card';
import './CardsContainer.css';

export const CardsContainer = () => {
  return (
    <div className="cards-container">
      {data.map((card) => {
        return (
          <Card
            key={card.id}
            title={card.title}
            image={card.image}
            description={card.description}
          />
        );
      })}
    </div>
  );
};
