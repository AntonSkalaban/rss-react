import React from 'react';
import { IFormCard } from 'types';
import './style.css';

interface FormCardProps {
  card: IFormCard;
}

export const FormCard = ({ card }: FormCardProps) => {
  return (
    <div className="form-card">
      <h3 className="form-card__title">{card.name}</h3>
      <p>To {card.country}</p>
      <p>Date of receiving: {card.date}</p>

      <div className="form-card__img-container">
        <img className="form-card__img" src={card.image} />
      </div>

      <div className="form-card__description">
        <ul>
          Benefits:
          {card.benefits.map((benefit, index) => {
            return <li key={index}>{benefit}</li>;
          })}
        </ul>
      </div>
      {card.notifications === 'on' && <p> The user is notified</p>}
    </div>
  );
};
