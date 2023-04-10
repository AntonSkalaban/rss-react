import React from 'react';
import './style.css';

interface BigCardInfoBlockProps {
  title: string;
  info: string;
}

export const CardInfoBlock = ({ title, info }: BigCardInfoBlockProps) => {
  return (
    <div className="big-card__infol-block">
      <p className="big-card__subtitle">{title}</p>
      <p className="big-card__info">{info}</p>
    </div>
  );
};
