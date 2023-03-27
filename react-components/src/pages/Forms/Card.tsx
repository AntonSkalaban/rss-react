import React from 'react';
import { CardProps } from './types';
import '../Main/Card.css';

export class Card extends React.Component<CardProps, object> {
  constructor(props: CardProps) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <h3 className="card__title">{this.props.name}</h3>
        <p>To {this.props.date}</p>
        <p>Date of receiving: {this.props.date}</p>

        <div className="card__img-container">
          <img className="card__img" src={this.props.image} />
        </div>

        <div className="card__description">
          <ul>Benefits:</ul>
          {this.props.benefits.map((benefit, index) => {
            return <li key={index}>{benefit.name}</li>;
          })}
        </div>
        {this.props.notifications === 'on' ? <p> The user is notified</p> : ''}
      </div>
    );
  }
}
