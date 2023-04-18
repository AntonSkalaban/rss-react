import React, { useEffect, useState } from 'react';
import { SearchBar } from './components/SearchBar/SearchBar';
import { CardsContainer } from './components/CardsContainer/CardsContainer';

import './Main.css';
import { cardAPI } from '../../services/CardService';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { IRickAndMortyCard } from 'types';
import { LoadingSpinner } from './components/LoadingSpinner/LoadingSpinner';
import { saveCards } from '../../store/cardsSlice';

export const Main = () => {
  const dispatch = useDispatch();
  const saveLoadedCards = (cards: IRickAndMortyCard[]) => dispatch(saveCards(cards));
  const savedCards = useSelector((state: RootState) => state.card.cards);

  const [trigger, { data: loadedCards, isFetching, error }] = cardAPI.useLazyGetCadrsByNameQuery();

  const [cards, setCards] = useState(savedCards as IRickAndMortyCard[]);
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  const getCards = (value: string) => {
    trigger(value, false);

    // setCards(loadedCards || []);
    saveLoadedCards(loadedCards || ([] as IRickAndMortyCard[]));
  };

  useEffect(() => {
    if (isFirstVisit) {
      setIsFirstVisit(false);
      getCards('');
    }
    console.log(savedCards, error, isFetching);
  }, []);

  return (
    <div className="main-page">
      <SearchBar getData={getCards} />
      {isFetching && <LoadingSpinner />}
      {error && <p>Not found:(</p>}
      {!error && !isFetching && cards && <CardsContainer cards={cards} />}
    </div>
  );
};
