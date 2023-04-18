import React, { useCallback, useEffect } from 'react';
import { SearchBar } from './components/SearchBar/SearchBar';
import { CardsContainer } from './components/CardsContainer/CardsContainer';
import './Main.css';
import { cardAPI } from '../../services/CardService';
import { LoadingSpinner } from './components/LoadingSpinner/LoadingSpinner';
import { IRickAndMortyCard } from '../../types';
import { useDispatch, useSelector } from 'react-redux';
import { saveCards } from '../../store/cardsSlice';
import { RootState } from '../../store';

export const Main = () => {
  const dispatch = useDispatch();
  const saveLoadedCards = (cards: IRickAndMortyCard[]) => dispatch(saveCards(cards));
  //const savedCards = useSelector((state: RootState) => state.card.cards);
  const searchText = useSelector((state: RootState) => state.searchBarValue.value);

  const [trigger, { data: cards, isFetching, error }] = cardAPI.useLazyGetCadrsByNameQuery();

  const getCards = useCallback((value: string) => {
    trigger(value, false);
    console.log(cards);
    if (cards) saveLoadedCards(cards);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getCards(searchText);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
