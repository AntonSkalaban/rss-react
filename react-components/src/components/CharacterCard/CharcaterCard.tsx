import React from 'react';
import { ICharcater } from 'types';
import './style.css';

interface CharacterCardProps {
  card: ICharcater;
  onClick: (card: ICharcater) => void;
}

export const СharacterCard = ({ card, onClick }: CharacterCardProps) => {
  const openModal = () => {
    onClick(card);
  };

  return (
    <div className="charcater-card" role="charcater-card" onClick={openModal}>
      <img className="charcater-card__image" alt={card.name} src={card.image} />
      <h2 className="charcater-card__name">{card.name}</h2>
    </div>
  );
};
