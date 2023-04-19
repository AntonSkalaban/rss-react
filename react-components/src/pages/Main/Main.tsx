import React, { useCallback, useEffect, useState } from 'react';
import { SearchBar } from './components/SearchBar/SearchBar';
import { CardsContainer } from './components/CardsContainer/CardsContainer';
import { cardAPI } from '../../services/CardService';
import { LoadingSpinner } from './components/LoadingSpinner/LoadingSpinner';
import { useDispatch, useSelector } from 'react-redux';
import { saveCards } from '../../store/cardsSlice';
import { RootState } from '../../store';
import { IRickAndMortyCard } from '../../types';
import './Main.css';

export const Main = () => {
  const dispatch = useDispatch();
  const saveLoadedCards = (cards: IRickAndMortyCard[]) => dispatch(saveCards(cards));
  const savedCards = useSelector((state: RootState) => state.card.cards);

  const [trigger, { data: cards, isFetching, error }] = cardAPI.useLazyGetCadrsByNameQuery();

  const [state, setState] = useState([] as IRickAndMortyCard[]);

  const getCards = useCallback((value: string) => {
    trigger(value, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!savedCards.length) {
      getCards('');
    } else {
      setState(savedCards);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (cards) {
      setState(cards);
      saveLoadedCards(cards);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cards]);

  return (
    <div className="main-page">
      <SearchBar getData={getCards} />
      {isFetching && <LoadingSpinner />}
      {error && <p>Not found:(</p>}
      {!error && !isFetching && state && <CardsContainer cards={state} />}
    </div>
  );
};
