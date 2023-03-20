import React from 'react';
import './card.css';
interface ICard {
  title: string;
  image: string;
  description: string;
}

export class Card extends React.Component<ICard, object> {
  render() {
    return (
      <div className="card">
        <h3 className="card__title">{this.props.title}</h3>
        <div className="card__img-container">
          <img className="card__img" src={this.props.image} />
        </div>
        <p className="card__description">{this.props.description}</p>
      </div>
    );
  }
}
