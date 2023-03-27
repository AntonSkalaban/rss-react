import React from 'react';
import { Card } from './Card';
import { Form } from './Form';
import { CardProps } from './types';

interface FormsPageState {
  cards: CardProps[];
}

export class Forms extends React.Component<object, FormsPageState> {
  constructor(props: FormsPageState) {
    super(props);
    this.state = { cards: [] as CardProps[] };
    this.addCard = this.addCard.bind(this);
  }

  addCard(card: CardProps) {
    this.setState({ cards: [...this.state.cards, card] });
  }

  render() {
    return (
      <>
        <h2>Forms</h2>
        <Form onSubmit={this.addCard} />
        <div style={{ display: 'flex' }}>
          {this.state.cards.map((card, index) => {
            return (
              <Card
                key={index}
                name={card.name}
                country={card.country}
                date={card.date}
                image={card.image}
                benefits={card.benefits}
                notifications={card.notifications}
              />
            );
          })}
        </div>
      </>
    );
  }
}
