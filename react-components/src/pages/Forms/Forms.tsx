import React from 'react';
import { Card } from './Card/Card';
import { Form } from './Form';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export const Forms = () => {
  const savedFormsCards = useSelector((state: RootState) => state.form.formCards);

  return (
    <>
      <h2>Forms</h2>
      <Form />
      <div style={{ display: 'flex' }}>
        {savedFormsCards.map((card, index) => {
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
