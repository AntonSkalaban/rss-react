import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { LoadingSpinner } from '../../components/LoadingSpinner/LoadingSpinner';
import { MainCardsContainer } from '../../components/MainCardsContainer/MainCardsContainer';
import { cardAPI } from '../../services/CardService';
import { saveCards } from '../../store/cardsSlice';
import { RootState } from '../../store';
import { ICharcater } from '../../types';
import './Main.css';

export const Main = () => {
  const [trigger, { data: loadedCards, isFetching, error }] = cardAPI.useLazyGetCadrsByNameQuery();
  const dispatch = useDispatch();
  const savedCards = useSelector((state: RootState) => state.card.cards);
  const [cards, setCards] = useState([] as ICharcater[]);

  const getCards = useCallback(
    (value: string) => {
      trigger(value, false);
    },
    [trigger]
  );

  const saveLoadedCards = useCallback(
    (cards: ICharcater[]) => dispatch(saveCards(cards)),
    [dispatch]
  );

  useEffect(() => {
    if (!savedCards.length) {
      getCards('');
    } else {
      setCards(savedCards);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (loadedCards) {
      setCards(loadedCards);
      saveLoadedCards(loadedCards);
    }
  }, [loadedCards, saveLoadedCards]);

  return (
    <div className="main-page">
      <SearchBar getData={getCards} />
      {isFetching && <LoadingSpinner />}
      {error && <p>Not found:(</p>}
      {!error && !isFetching && cards && <MainCardsContainer cards={cards} />}
    </div>
  );
};
