import React from 'react';
import { CharacterInfoBlock } from './CharacterInfoBlock/CharacterInfoBlock';
import './style.css';
import { ICharcater } from 'types';

interface CharacterInfoProps {
  card: ICharcater;
}

export const CharacterInfoCard = ({ card }: CharacterInfoProps) => {
  return (
    <div className="character-info-card">
      <div className="character-info-card__imgage-container">
        <img className="character-info-card__image" src={card.image} />
      </div>
      <div className="character-info-card__info-container">
        <h3 className="character-info-card__name">{card.name}</h3>
        <p className="character-info-card__status">
          <span className="html-bull" style={{ color: card.status === 'Alive' ? 'green' : 'red' }}>
            &bull;
          </span>
          {card.status} - {card.species}
        </p>
        <CharacterInfoBlock title={'Gender:'} info={card.gender} />
        <CharacterInfoBlock title={'Origin location:'} info={card.origin.name} />
        <CharacterInfoBlock title={'Last known location:'} info={card.location.name} />
      </div>
    </div>
  );
};
