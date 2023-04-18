import React, { useEffect, useState } from 'react';
import { SmallCard } from '../SmallCard/SmallCard';
import { PortalModal } from '../PortalModal';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';

import './style.css';

import { cardAPI } from '../../../../services/CardService';
import { IRickAndMortyCard } from 'types';
import { useDispatch, useSelector } from 'react-redux';

interface CardsContainerProps {
  cards: IRickAndMortyCard[];
}

export const CardsContainer = ({ cards }: CardsContainerProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [card, setCard] = useState({} as IRickAndMortyCard);

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
        {cards.map((card) => {
          return <SmallCard key={card.id} card={card} onClick={openModal} />;
        })}
      </div>
      <div>
        <PortalModal card={card} isOpen={isModalOpen} closeModal={closeModal} />
      </div>
    </>
  );
};
