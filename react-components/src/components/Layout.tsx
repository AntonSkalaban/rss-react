import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';

export enum Pages {
  Main = 'Main',
  AboutUs = 'About Us',
  Error = 'Error',
}

const getPage = () => {
  switch (window.location.pathname) {
    case '/':
      return Pages.Main;
    case '/about':
      return Pages.AboutUs;
    default:
      return Pages.Error;
  }
};

export class Layout extends React.Component<object, { page: Pages }> {
  constructor(props: object) {
    super(props);
    this.state = { page: getPage() };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(page: Pages) {
    this.setState({ page: page });
  }
  render() {
    return (
      <>
        <header className="header">
          <Navigation onClick={this.handleClick} />
          <h2>You are on the {this.state.page} page</h2>
        </header>
        <Outlet />
      </>
    );
  }
}
