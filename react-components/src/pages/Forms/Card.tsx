import React from 'react';

interface ICard {
  title: string;
}
export class FileInput extends React.Component<ICard, object> {
  constructor(props: ICard) {
    super(props);
  }

  render() {
    return <p>{this.props.title}</p>;
  }
}
