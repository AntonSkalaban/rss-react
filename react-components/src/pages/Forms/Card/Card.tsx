import React from 'react';
import { ICard } from './types';
import './Card.css';

export const Card = ({ name, date, country, image, benefits, notifications }: ICard) => {
  return (
    <div className="card">
      <h3 className="card__title">{name}</h3>
      <p>To {country}</p>
      <p>Date of receiving: {date}</p>

      <div className="card__img-container">
        <img className="card__img" src={image} />
      </div>

      <div className="card__description">
        <ul>
          Benefits:
          {benefits.map((benefit, index) => {
            return <li key={index}>{benefit}</li>;
          })}
        </ul>
      </div>
      {notifications === 'on' && <p> The user is notified</p>}
    </div>
  );
};
