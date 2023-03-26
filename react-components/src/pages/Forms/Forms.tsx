import React from 'react';
import { Form } from './Form';

export class Forms extends React.Component<object, { cards: { title: string } }> {
  constructor(props: object) {
    super(props);
    this.state = { cards: { title: '' } };
  }


  render() {
    return (
      <div>
        <h2>Forms</h2>
        <Form />
      </div>
    );
  }
}
