import React from 'react';
import { SearchBar } from './Search-bar.';
import { CardsContainer } from './Cards-сontainer';
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
