import React from 'react';
import { CardInfoBlock } from './components/BigCardInfoBlock';
import { ICard } from '../../type';
import './style.css';

interface BigCardProps {
  card: ICard;
  onClick: () => void;
}

export const BigCard = ({ card, onClick }: BigCardProps) => {
  const closeModal = () => {
    onClick();
  };

  return (
    <div className="overlay" onClick={closeModal}>
      <div className="big-card" onClick={(e) => e.stopPropagation()}>
        <p className="cross" onClick={closeModal}>
          X
        </p>
        <div className="big-card__imgage-container">
          <img className="big-card__image" src={card.image} />
        </div>
        <div className="big-card__info-container">
          <h3 className="big-card__name">{card.name}</h3>
          <p className="big-card__status">
            <span
              className="html-bull"
              style={{ color: card.status === 'Alive' ? 'green' : 'red' }}
            >
              &bull;
            </span>
            {card.status} - {card.species}
          </p>
          <CardInfoBlock title={'Gender:'} info={card.gender} />
          <CardInfoBlock title={'Origin location:'} info={card.origin.name} />
          <CardInfoBlock title={'Last known location:'} info={card.location.name} />
        </div>
      </div>
    </div>
  );
};
