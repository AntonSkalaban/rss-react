import { ICard } from '../../type';
import React from 'react';
import './style.css';

interface CardProps {
  card: ICard;
  onClick: (card: ICard) => void;
}

export const SmallCard = ({ card, onClick }: CardProps) => {
  const openModal = () => {
    onClick(card);
  };

  return (
    <div className="small-card" role="small-card" onClick={openModal}>
      <img className="small-card__image" alt={card.name} src={card.image} />
      <h2 className="small-card__name">{card.name}</h2>
    </div>
  );
};
