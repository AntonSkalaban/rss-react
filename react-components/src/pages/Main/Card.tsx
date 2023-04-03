import React from 'react';
import './Card.css';
interface ICard {
  title: string;
  image: string;
  description: string;
}

export const Card = ({ title, image, description }: ICard) => {
  return (
    <div className="card">
      <h3 className="card__title">{title}</h3>
      <div className="card__img-container">
        <img className="card__img" src={image} />
      </div>
      <p className="card__description">{description}</p>
    </div>
  );
};
