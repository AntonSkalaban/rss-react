import React from 'react';
import { CardProps } from './types';
import '../Main/Card.css';

export const Card = (props: CardProps) => {
  return (
    <div className="card">
      <h3 className="card__title">{props.name}</h3>
      <p>To {props.date}</p>
      <p>Date of receiving: {props.date}</p>

      <div className="card__img-container">
        <img className="card__img" src={props.image} />
      </div>

      <div className="card__description">
        <ul>Benefits:</ul>
        {props.benefits.map((benefit, index) => {
          return <li key={index}>{benefit.name}</li>;
        })}
      </div>
      {props.notifications === 'on' ? <p> The user is notified</p> : ''}
    </div>
  );
};
