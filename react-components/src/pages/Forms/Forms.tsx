import React, { useState } from 'react';
import { Card } from './Card/Card';
import { Form } from './Form';
import { ICard } from './Card/types';

export const Forms = () => {
  const [cards, setCards] = useState([] as ICard[]);

  const addCard = (card: ICard) => {
    setCards([...cards, card]);
  };

  return (
    <>
      <h2>Forms</h2>
      <Form onSubmit={addCard} />
      <div style={{ display: 'flex' }}>
        {cards.map((card, index) => {
          return (
            <Card
              key={index}
              name={card.name}
              country={card.country}
              date={card.date}
              image={card.image}
              benefits={card.benefits}
              notifications={card.notifications}
            />
          );
        })}
      </div>
    </>
  );
};
