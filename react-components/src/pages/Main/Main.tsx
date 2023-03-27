import React from 'react';
import { SearchBar } from './SearchBar';
import { CardsContainer } from './CardsContainer';
export class Main extends React.Component {
  render() {
    return (
      <div>
        <h2>Main</h2>
        <SearchBar />
        <CardsContainer />
      </div>
    );
  }
}
