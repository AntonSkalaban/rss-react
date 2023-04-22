import React from 'react';
import { useSelector } from 'react-redux';
import { Form } from '../../components/Form/Form';
import { FormCardsContainer } from '../../components/FormCardsContainer/FormCardsContainer';
import { RootState } from '../../store';

export const Forms = () => {
  const savedFormsCards = useSelector((state: RootState) => state.form.formCards);

  return (
    <>
      <h2>Forms</h2>
      <Form />
      <FormCardsContainer cards={savedFormsCards} />
    </>
  );
};
