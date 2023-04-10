import React, { useState } from 'react';
import { SearchBar } from './components/SearchBar/SearchBar';
import { CardsContainer } from './components/CardsContainer/CardsContainer';
import { ICard } from './type';
import './Main.css';

export const Main = () => {
  const [cards, setCards] = useState<ICard[]>([] as ICard[]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const updateCards = (cards: ICard[]) => {
    setCards(cards);
  };

  const handleLoading = (value: boolean) => {
    setIsLoading(value);
  };

  const handleError = (value: boolean) => {
    setError(value);
  };

  return (
    <div className="main-page">
      <SearchBar updateData={updateCards} handleLoading={handleLoading} handleError={handleError} />
      <CardsContainer cards={cards} isLoading={isLoading} error={error} />
    </div>
  );
};
