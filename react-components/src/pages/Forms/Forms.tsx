import React from 'react';
import { Form } from './Form';
import { ICard } from './types';

interface FormsPageState {
  cards: ICard[];
}

export class Forms extends React.Component<object, FormsPageState> {
  constructor(props: FormsPageState) {
    super(props);
    this.state = { cards: [] as ICard[] };
    this.addCard = this.addCard.bind(this);
  }

  addCard(card: ICard) {
    this.setState((prevState: ICard[]) => {
      cards: [...prevState, card];
    });
  }

  render() {
    return (
      <div>
        <h2>Forms</h2>
        <Form onSubmit={this.addCard} />
      </div>
    );
  }
}
