import React, { useState } from 'react';
import { SmallCard } from '../SmallCard/SmallCard';
import { PortalModal } from '../PortalModal';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';
import { ICard } from '../../type';
import './style.css';

interface CardsContainerProps {
  cards: ICard[];
  isLoading: boolean;
  error: boolean;
}

export const CardsContainer = ({ cards, isLoading, error }: CardsContainerProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [card, setCard] = useState({} as ICard);

  const openModal = (card: ICard) => {
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
        {!isLoading &&
          !error &&
          cards.map((card) => {
            return <SmallCard key={card.id} card={card} onClick={openModal} />;
          })}
      </div>
      <div>
        <PortalModal card={card} isOpen={isModalOpen} closeModal={closeModal} />
      </div>
    </>
  );
};
