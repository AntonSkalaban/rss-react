import React, { useState } from 'react';
import { SearchBar } from './components/SearchBar/SearchBar';
import { CardsContainer } from './components/CardsContainer/CardsContainer';

import './Main.css';
// import { updateCards } from '../../store/mainSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../../store/index';

export const Main = () => {
  // const [cards, setCards] = useState<ICard[]>([] as ICard[]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(false);

  // const dispatch = useDispatch();

  // const cards = useSelector((state: RootState) => state.cards.cards);
  // const getCards = () => dispatch(updateCards(cards));
  // const updateCards = (cards: ICard[]) => {
  //   setCards(cards);
  // };

  // const handleLoading = (value: boolean) => {
  //   setIsLoading(value);
  // };

  // const handleError = (value: boolean) => {
  //   setError(value);
  // };

  return (
    <div className="main-page">
      <SearchBar />
      <CardsContainer />
    </div>
  );
};
