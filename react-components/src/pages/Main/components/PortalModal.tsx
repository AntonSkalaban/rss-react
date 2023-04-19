import React from 'react';
import ReactDOM from 'react-dom';
import { BigCard } from './BigCard/BigCard';
import { ICard } from '../type';

interface PortalModalProps {
  card: ICard;
  isOpen: boolean;
  closeModal: () => void;
}

export const PortalModal = ({ card, isOpen, closeModal }: PortalModalProps) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(<BigCard card={card} onClick={closeModal} />, document.body);
};
