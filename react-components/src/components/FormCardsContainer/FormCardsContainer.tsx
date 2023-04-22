import React from 'react';
import { FormCard } from '../../components/FormCard/FormCard';
import { IFormCard } from 'types';
import './style';

interface FormCardsContainerProps {
  cards: IFormCard[];
}

export const FormCardsContainer = ({ cards }: FormCardsContainerProps) => {
  return (
    <div className="cards-container">
      {cards.map((card, index) => {
        return <FormCard key={index} card={card} />;
      })}
    </div>
  );
};
