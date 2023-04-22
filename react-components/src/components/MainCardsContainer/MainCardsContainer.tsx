import React, { useState } from 'react';
import { СharacterCard } from '../CharacterCard/CharcaterCard';
import { PortalModal } from '../../components/PortalModal/PortalModal';
import { CharacterInfoCard } from '../../components/CharacterInfoCard/CharacterInfoCard';
import { ICharcater } from 'types';
import './style.css';

interface CardsContainerProps {
  cards: ICharcater[];
}

export const MainCardsContainer = ({ cards }: CardsContainerProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [card, setcCard] = useState({} as ICharcater);

  const openModal = (card: ICharcater) => {
    setModalOpen(true);
    setcCard(card);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="cards-container">
        {cards.map((card) => {
          return <СharacterCard key={card.id} card={card} onClick={openModal} />;
        })}
      </div>
      <PortalModal
        child={<CharacterInfoCard card={card} />}
        isOpen={isModalOpen}
        closeModal={closeModal}
      />
    </>
  );
};
