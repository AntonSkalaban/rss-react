import React from 'react';
import ReactDOM from 'react-dom';

interface PortalModalProps {
  child: JSX.Element;
  isOpen: boolean;
  closeModal: () => void;
}

export const PortalModal = ({ child, isOpen, closeModal }: PortalModalProps) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className="overlay" onClick={() => closeModal()}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <p className="cross" onClick={() => closeModal()}>
          X
        </p>
        {child}
      </div>
    </div>,

    document.body
  );
};
