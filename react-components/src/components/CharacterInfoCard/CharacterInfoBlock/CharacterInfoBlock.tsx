import React from 'react';
import './style.css';

interface CharacterInfoBlockProps {
  title: string;
  info: string;
}

export const CharacterInfoBlock = ({ title, info }: CharacterInfoBlockProps) => {
  return (
    <div className="character-info__block">
      <p className="character-info__subtitle">{title}</p>
      <p className="character-info__info">{info}</p>
    </div>
  );
};
