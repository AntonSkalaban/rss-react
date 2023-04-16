import React, { useEffect, useState } from 'react';
import { SmallCard } from '../SmallCard/SmallCard';
import { PortalModal } from '../PortalModal';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';

import './style.css';

import { cardAPI } from '../../../../services/CardService';
import { IRickAndMortyCard } from 'types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';

// interface CardsContainerProps {
//   isLoading: boolean;
//   error: boolean;
// }

export const CardsContainer = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [card, setCard] = useState({} as IRickAndMortyCard);

  //const dispatch = useDispatch();
  //const cards = useSelector((state: RootState) => state.cards.cards);

  const searchBarValue = useSelector((state: RootState) => state.searchBarValue.value);

  const { data, error, isLoading } = cardAPI.useGetCadrsByNameQuery(searchBarValue);
  const cards = data?.results;
  console.log(searchBarValue, data);
  // useEffect(() => {
  //   dispatch(fetchCards());
  // });

  const openModal = (card: IRickAndMortyCard) => {
    setModalOpen(true);
    setCard(card);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="cards-container">
        {isLoading && <LoadingSpinner />}
        {error && <p>Not found:(</p>}
        {cards &&
          (cards as unknown as IRickAndMortyCard[]).map((card) => {
            return <SmallCard key={card.id} card={card} onClick={openModal} />;
          })}
      </div>
      <div>
        <PortalModal card={card} isOpen={isModalOpen} closeModal={closeModal} />
      </div>
    </>
  );
};
